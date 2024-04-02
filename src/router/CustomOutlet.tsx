import React, { ReactElement, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import API from '@app/api';
import Layout from '@pages/Layout';

import { ICustomOutlet } from './interfaces';

const CustomOutlet = ({ isWithBasicLayout, isPrivate }: ICustomOutlet): ReactElement | null => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isAccess, setIsAccess] = useState<boolean>(false);

  const onCheck = async (): Promise<void> => {
    if (!isPrivate) {
      setIsAccess(true);

      return;
    }

    const token = localStorage.getItem('token');

    if (token === null) {
      setIsAccess(false);

      return;
    }

    const res = await API.auth.validate(token);

    setIsAccess('isValid' in res ? res?.isValid : false);
  };

  // eslint-disable-next-line lint-local/no-inline-callbacks
  useEffect((): void => {
    onCheck();
  }, [pathname]);

  if (!isAccess) {
    navigate('/login');

    return null;
  }

  if (isWithBasicLayout) {
    return <Layout />;
  }

  return <Outlet />;
};

export default CustomOutlet;
