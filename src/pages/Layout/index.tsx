import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@pages/Layout/components/Navigation/components/Header';
import { useMediaQuery } from '@shared/hooks';
import { BREAKPOINTS } from '@shared/palette';

import Navigation from './components/Navigation';
import { Container, Wrapper } from './styles';

const Layout = (): ReactElement => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobileS);

  return (
    <>
      {isMobile && <Header />}
      <Wrapper>
        <Navigation />
        <Container>
          <Outlet />
        </Container>
      </Wrapper>
    </>
  );
};

export default Layout;
