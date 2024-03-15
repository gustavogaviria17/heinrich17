import { ReactElement, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { AVAILABLE_STATUS_NUMBERS, BASE_API_URL, LOG_ON_DEV } from './constants';
import { IError, IInterceptors } from './interfaces';

type TUnmount = () => void;

const [minStatusNumber, maxStatusNumber] = AVAILABLE_STATUS_NUMBERS;

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
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

    return { ...config, headers };
  };

  const onErrorRequest = (error: AxiosError | Error): Promise<AxiosError> => Promise.reject(error);

  const onSuccessResponse = (response: AxiosResponse): AxiosResponse => {
    const { data } = response;

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
    const details = data?.details || undefined;
    const errorMessage = data?.error || message || defaultMessage;
    const code = error?.response?.data?.code || undefined;

    LOG_ON_DEV(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`);

    switch (status) {
      case 401: {
        // "No auth"
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

    return { code, error: details || errorMessage };
  };

  const onInit = (): TUnmount => {
    const requestInterceptor = axiosInstance.interceptors.request.use(onSuccessRequest, onErrorRequest);
    const responseInterceptor = axiosInstance.interceptors.response.use(onSuccessResponse, onErrorResponse);

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
