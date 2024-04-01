import { useEffect } from 'react';
import { useThrottle } from '@shared/hooks/useThrottle';
import { getFields, IDefaultStore } from '@store/config';
import { IStatus } from '@store/interfaces';
import useStatusesStore from '@store/statuses';
import { notification } from 'antd';

export const useStoreStatus = <T extends IDefaultStore>(storeGetter: T): T => {
  const { statuses: incomingStatuses } = storeGetter;
  const { setStatus, statuses } = useStatusesStore(getFields(['setStatus', 'statuses']));

  const updateStatuses = (): void => {
    (statuses?.isError || statuses?.isSuccess) && throttled();
  };

  const openNotification = (): void => {
    notification.open({
      message: statuses?.message || 'Success',
      type: getStatus(statuses),
    });
  };

  // TODO пока не пашет, нотификации затраиваются
  const throttled = useThrottle(openNotification, 3000);

  const getStatus = (status: IStatus): 'success' | 'error' | 'info' | 'warning' => {
    if (status?.isError) return 'error';
    if (status?.isSuccess) return 'success';

    return 'info';
  };
  //
  // const getDescription = (status: IStatus): string => {
  //   if (status?.isError) return 'Error!';
  //   if (status?.isSuccess) return 'Excellent!';
  //
  //   return 'Attention';
  // };

  useEffect(updateStatuses, [statuses]);
  // eslint-disable-next-line lint-local/no-inline-callbacks
  useEffect(() => {
    setStatus(incomingStatuses);
  }, [incomingStatuses]);

  return storeGetter;
};
