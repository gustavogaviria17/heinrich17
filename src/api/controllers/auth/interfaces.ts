export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUserResponse;
}

export interface IUserResponse {
  avatar?: string;
  id: string;
  isActivated: boolean;
  name: string;
}

export interface IAuthRequest {
  country: string;
  dob: string;
  email: string;
  name: string;
  password: string;
  wallet?: string;
}

export interface IValidateResponse {
  isValid: boolean;
}
