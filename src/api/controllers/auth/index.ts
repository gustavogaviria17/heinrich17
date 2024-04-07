import axiosInstance from '@app/api/axios';
import { IError } from '@app/api/axios/interfaces';

import { IAuthRequest, IAuthResponse, IValidateResponse } from './interfaces';

class AuthAPI {
  private readonly authURL: string;

  constructor() {
    this.authURL = '/auth';
  }

  async signin(email: string, password: string): Promise<IAuthResponse | IError> {
    return axiosInstance.post(`${this.authURL}/signin`, { email, password });
  }

  async signup(data: IAuthRequest): Promise<IAuthResponse | IError> {
    return axiosInstance.post(`${this.authURL}/signup`, data);
  }

  async logout(): Promise<IAuthResponse | IError> {
    return axiosInstance.post(`${this.authURL}/logout`);
  }

  async refresh(): Promise<IAuthResponse | IError> {
    return axiosInstance.get(`${this.authURL}/refresh`);
  }

  async validate(token: string): Promise<IValidateResponse | IError> {
    return axiosInstance.post(`${this.authURL}/validate`, { token });
  }
}

export default AuthAPI;
