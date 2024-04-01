import { IUserResponse } from '@app/api/controllers/auth/interfaces';
import { IDefaultStore } from '@store/config';

export interface IUserStore extends IDefaultStore {
  setUser: (user: IUserResponse | null) => void;
  user: IUserResponse | null;
}
