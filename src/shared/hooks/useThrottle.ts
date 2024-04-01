import { useState } from 'react';

export const useThrottle = (func: any, delay: number): ((...args: any[]) => void) => {
  const [canCall, setCanCall] = useState<boolean>(true);

  return (...args: any[]): void => {
    if (canCall) {
      func(...args);
      setCanCall(false);
      // eslint-disable-next-line lint-local/no-inline-callbacks
      setTimeout((): void => {
        setCanCall(true);
      }, delay);
    }
  };
};
