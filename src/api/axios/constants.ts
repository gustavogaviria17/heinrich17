const successStatus = 200;
const badRequest = 400;

export const AVAILABLE_STATUS_NUMBERS: number[] = [successStatus, badRequest];
export const BASE_API_URL = import.meta.env.VITE_BASE_PATH || '/api/v1'; // http://localhost:8080 or base api url

export const LOG_ON_DEV = (message: string): void => {
  if (process.env.NODE_ENV === 'development') {
    console.log(message);
  }
};
