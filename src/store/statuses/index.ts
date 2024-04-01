import { addDelay } from '@shared/helpers';
import { createStore, ISetterConfig, statuses } from '@store/config';
import { IStatus } from '@store/interfaces';

import { IStatusesStore } from './interfaces';

const handleSetStatus =
  ({ set }: ISetterConfig<IStatusesStore>, actionName: string) =>
  async (newStatus?: IStatus): Promise<void> => {
    set({ statuses: newStatus }, actionName);

    await addDelay(3000);

    set({ statuses });
  };

const setDataToStore = (config: ISetterConfig<IStatusesStore>): IStatusesStore => ({
  setStatus: handleSetStatus(config, 'setStatus'),
  statuses,
});

const useStatusesStore = createStore<IStatusesStore>(setDataToStore, 'userStore');

export default useStatusesStore;
