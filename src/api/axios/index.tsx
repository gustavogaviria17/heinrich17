import { ReactElement, useEffect } from 'react';
import API from '@app/api';
import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { AVAILABLE_STATUS_NUMBERS, BASE_API_URL, LOG_ON_DEV } from './constants';
import { IError, IInterceptors } from './interfaces';

type TUnmount = () => void;

const [minStatusNumber, maxStatusNumber] = AVAILABLE_STATUS_NUMBERS;

const axiosInstance = axios.create({
  baseURL: `${BASE_API_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 60000,
  validateStatus: (status: number) => status >= minStatusNumber && status < maxStatusNumber,
  withCredentials: true,
});

const Interceptors = ({ children }: IInterceptors): ReactElement => {
  const onSuccessRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { method, url, headers } = config;

    LOG_ON_DEV(`🚀[API] ${method?.toUpperCase()} ${url} | Request`);

    const token = localStorage.getItem('token');

    if (!headers.Authorization && token) {
      // @ts-ignore
      return { ...config, headers: { ...headers, Authorization: `Bearer ${token}` } };
    }

    return { ...config, headers };
  };

  const onErrorRequest = (error: AxiosError | Error): Promise<AxiosError> => Promise.reject(error);

  const onSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    const { data } = response;

    if (response.config.url === '/auth/signin') {
      localStorage.setItem('token', data.accessToken);
      axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
    }

    return data || response;
  };

  const onErrorResponse = async (error: AxiosError | Error): Promise<IError> => {
    if (!axios.isAxiosError(error)) {
      LOG_ON_DEV(`🚨 [API] | Error ${error.message}`);

      return { code: undefined, error: error.message };
    }

    const { message, config, response } = error;
    const { method, url } = config as AxiosRequestConfig;
    const { status, data } = (response as AxiosResponse) ?? {};
    const defaultMessage = 'Oops, something went wrong';
    const errorMessage = data?.message || defaultMessage;

    LOG_ON_DEV(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

    switch (status) {
      case 401: {
        if (url === '/auth/refresh') {
          // TODO  нужно отдать ошибку что обновить токен не вышло и типа показать просто статус попробуйте позже
          return { code: status.toString(), error: errorMessage };
        }

        const res = await API.auth.refresh();

        if ('accessToken' in res && res?.accessToken) {
          const updatedConfig = {
            ...config,
            data:
              config?.url === '/auth/validate'
                ? JSON.stringify({ token: res?.accessToken })
                : config?.data,
            headers: {
              ...config?.headers,
              Authorization: `Bearer ${res?.accessToken}`,
            },
          };

          return axiosInstance.request(updatedConfig);
        }

        break;
      }
      case 403: {
        // "Permission denied"
        break;
      }
      case 404: {
        // "Not found"
        break;
      }
      case 500: {
        // "Server error"
        break;
      }
      default: {
        // "Unknown error occurred"
        break;
      }
    }

    return { code: status.toString(), error: errorMessage };
  };

  const onInit = (): TUnmount => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      onSuccessRequest,
      onErrorRequest,
    );
    const responseInterceptor = axiosInstance.interceptors.response.use(
      onSuccessResponse,
      onErrorResponse,
    );

    return (): void => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  };

  useEffect(onInit, []);

  return children;
};

export default axiosInstance;
export { Interceptors };
