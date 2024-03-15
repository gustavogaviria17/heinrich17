import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Back from '@pages/Auth/components/Back';
import LoginForm from '@pages/Auth/components/LoginForm';
import SignupForm from '@pages/Auth/components/SignupForm';
import login from '@shared/media/login.jpg';

import { Container, Header, Image, Wrapper } from './styles';

const Auth = (): ReactElement => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isLogin = pathname.includes('login');

  return (
    <Wrapper>
      {isLogin && (
        <Container>
          <Back />
          <Header>
            <h1>{t('auth.login.heading')}</h1>
          </Header>
          <LoginForm />
        </Container>
      )}
      {!isLogin && (
        <Container isForReg={true}>
          <Back />
          <Header>
            <h1>{t('auth.registration.heading')}</h1>
          </Header>
          <SignupForm />
        </Container>
      )}

      <Image alt="login image" src={login} />
    </Wrapper>
  );
};

export default Auth;
