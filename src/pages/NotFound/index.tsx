import React, { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { Clip, Digit, ErrorContainer, ErrorMsg, ErrorText, Shadow, Triangle, Wrapper } from './styles';

const NotFound = (): ReactElement => {
  const navigate = useNavigate();
  const [firstDigit, setFirstDigit] = useState<number>(0);
  const [secondDigit, setSecondDigit] = useState<number>(0);
  const [thirdDigit, setThirdDigit] = useState<number>(0);

  /* eslint-disable */
  const onInit = (): (() => void) => {
    let i = 0;
    const time = 30;

    const loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        setFirstDigit(4);
      } else {
        setFirstDigit(randomNum());
        i++;
      }
    }, time);

    const loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        setSecondDigit(0);
      } else {
        setSecondDigit(randomNum());
        i++;
      }
    }, time);

    const loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        setThirdDigit(4);
      } else {
        setThirdDigit(randomNum());
        i++;
      }
    }, time);

    return () => {
      clearInterval(loop1);
      clearInterval(loop2);
      clearInterval(loop3);
    };
  };

  /* eslint-enable */
  const randomNum = (): number => Math.floor(Math.random() * 9) + 1;

  useEffect(onInit, []);

  return (
    <Wrapper>
      <ErrorContainer>
        <Clip>
          <Shadow type="third">
            <Digit type="third">{thirdDigit}</Digit>
          </Shadow>
        </Clip>
        <Clip>
          <Shadow type="second">
            <Digit type="second">{secondDigit}</Digit>
          </Shadow>
        </Clip>
        <Clip>
          <Shadow type="first">
            <Digit type="first">{firstDigit}</Digit>
          </Shadow>
        </Clip>
        <ErrorMsg>
          OH!
          <Triangle />
        </ErrorMsg>
        <ErrorText>Sorry! Page not found</ErrorText>
        <Button onClick={(): void => navigate('/')} size="large" type="primary">
          Go to the Home
        </Button>
      </ErrorContainer>
    </Wrapper>
  );
};

export default NotFound;
