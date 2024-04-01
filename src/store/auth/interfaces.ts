import { IAuthRequest } from '@app/api/controllers/auth/interfaces';
import { IDefaultStore } from '@store/config';

export interface IAuthStore extends IDefaultStore {
  signin: (email: string, password: string) => void;
  signup: (data: IAuthRequest) => void;
  token: string | null;
}
