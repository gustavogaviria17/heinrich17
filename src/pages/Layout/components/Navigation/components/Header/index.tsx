import React, { ReactElement } from 'react';
import { ReactComponent as Logo } from '@shared/media/logo.svg';

import { Wrapper } from './styles';

const Header = (): ReactElement => (
  <Wrapper>
    <Logo />
  </Wrapper>
);

export default Header;
