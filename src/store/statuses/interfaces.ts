import { IDefaultStore } from '@store/config';
import { IStatus } from '@store/interfaces';

export interface IStatusesStore extends IDefaultStore {
  setStatus: (status?: IStatus) => void;
}
