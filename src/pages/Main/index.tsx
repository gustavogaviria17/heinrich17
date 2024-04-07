import React, { ReactElement } from 'react';

import News from './components/News';
import { Wrapper } from './styles';

const Main = (): ReactElement => {
  console.log('test');

  return (
    <Wrapper>
      <News />
    </Wrapper>
  );
};

export default Main;
