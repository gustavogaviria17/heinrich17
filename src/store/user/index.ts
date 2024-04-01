import { IUserResponse } from '@app/api/controllers/auth/interfaces';
import { createStoreWithCache, ISetterConfig, statuses } from '@store/config';

import { IUserStore } from './interfaces';

const handleSetUser =
  ({ set }: ISetterConfig<IUserStore>, actionName: string) =>
  async (user: IUserResponse | null): Promise<void> => {
    set({ user }, actionName);
  };

const setDataToStore = (config: ISetterConfig<IUserStore>): IUserStore => ({
  setUser: handleSetUser(config, 'setUser'),
  statuses,
  user: null,
});

const toCache = ({ user }: IUserStore): Partial<IUserStore> => ({
  user,
});

const useUserStore = createStoreWithCache<IUserStore>(setDataToStore, 'userStore', toCache);

export default useUserStore;
