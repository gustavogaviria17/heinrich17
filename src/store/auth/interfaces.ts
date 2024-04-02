import { IAuthRequest } from '@app/api/controllers/auth/interfaces';
import { IDefaultStore } from '@store/config';
import { IStatus } from '@store/interfaces';

export interface IAuthStore extends IDefaultStore {
  logout: () => Promise<IStatus | void>;
  signin: (email: string, password: string) => void;
  signup: (data: IAuthRequest) => void;
  token: string | null;
}
