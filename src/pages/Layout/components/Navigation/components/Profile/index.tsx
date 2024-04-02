import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import DropdownButton from '@components/DropdownButton';
import useAuthStore from '@store/auth';
import { getFields } from '@store/config';
import useUserStore from '@store/user';
import { MenuProps } from 'antd';

import { IProps } from './interfaces';
import { Avatar, Button, Name, Wrapper } from './styles';

const Profile = ({ user: { avatar, name } }: IProps): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { logout } = useAuthStore(getFields('logout'));
  const { setUser } = useUserStore(getFields('setUser'));

  const goToProfileSettings = (): void => {
    navigate('/profile-settings');
  };

  const onLogout = async (): Promise<void> => {
    const response = await logout();

    if (response?.isSuccess) {
      setUser(null);
      navigate('/');
      localStorage.removeItem('token');
    }
  };

  const items: MenuProps['items'] = [
    {
      key: '0',
      label: <span onClick={goToProfileSettings}>{t('navigation.profile.dropdown.settings')}</span>,
    },
    {
      key: '1',
      label: <span onClick={onLogout}>{t('navigation.profile.dropdown.logout')}</span>,
    },
  ];

  return (
    <Wrapper>
      <Avatar src={avatar} />
      <Name>{name}</Name>
      <Button>
        <DropdownButton options={items} size={35} />
      </Button>
    </Wrapper>
  );
};

export default Profile;
