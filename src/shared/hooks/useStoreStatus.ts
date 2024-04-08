import { useEffect } from 'react';
import { addDelay } from '@shared/helpers';
import { getFields, IDefaultStore } from '@store/config';
import { IStatus } from '@store/interfaces';
import useStatusesStore from '@store/statuses';
import { notification } from 'antd';

export const useStoreStatus = <T extends IDefaultStore>(storeGetter: T): T => {
  const { statuses: incomingStatuses } = storeGetter;
  const { setStatus, statuses } = useStatusesStore(getFields(['setStatus', 'statuses']));

  const updateStatuses = (): void => {
    const isStatusShown = localStorage.getItem('statusShown');
    console.log({ isStatusShown, statuses });
    if ((statuses?.isError || statuses?.isSuccess) && isStatusShown === null) {
      openNotification();
    }
  };

  const openNotification = async (): Promise<void> => {
    localStorage.setItem('statusShown', 'true');

    await addDelay(500);

    notification.open({
      message: statuses?.message || 'Success',
      type: getStatus(statuses),
    });

    localStorage.removeItem('statusShown');
  };

  const getStatus = (status: IStatus): 'success' | 'error' | 'info' | 'warning' => {
    if (status?.isError) return 'error';
    if (status?.isSuccess) return 'success';

    return 'info';
  };

  useEffect(updateStatuses, [statuses]);

  useEffect(() => {
    setStatus(incomingStatuses);
  }, [incomingStatuses]);

  return storeGetter;
};
