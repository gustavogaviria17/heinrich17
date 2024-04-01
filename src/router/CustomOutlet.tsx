import React, { ReactElement, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import API from '@app/api';
import Layout from '@pages/Layout';

import { ICustomOutlet } from './interfaces';

const CustomOutlet = ({ isWithBasicLayout, isPrivate }: ICustomOutlet): ReactElement | null => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // eslint-disable-next-line lint-local/no-inline-callbacks
  const isAccess = useMemo(async (): Promise<boolean> => {
    if (!isPrivate) return true;

    const token = localStorage.getItem('token');

    if (token === null) {
      navigate('/login');

      return false;
    }

    const res = await API.auth.validate(token);

    return 'isValid' in res ? res?.isValid : false;
  }, [pathname]);

  if (!isAccess) return null;

  if (isWithBasicLayout) {
    return <Layout />;
  }

  return <Outlet />;
};

export default CustomOutlet;
