import React, { ReactElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import { getColor } from '@shared/helpers';
import { BREAKPOINTS } from '@shared/palette';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  position: relative;
  transition: background-color 200ms linear;
  width: 40px;

  &:hover {
    background-color: ${getColor('bg')};
  }

  @media ${BREAKPOINTS.mobileS} {
    background-color: ${getColor('bg')};
  }
`;

const IconWrapper = styled.div<any>`
  svg {
    cursor: pointer;
    fill: ${getColor('accent')};
    &:hover {
      ${Wrapper} {
        background-color: ${getColor('bg')};
      }
    }
  }
`;

const Back = (): ReactElement => {
  const navigate = useNavigate();
  const [isGoBackPending, setIsGoBackPending] = useState<boolean>(false);

  const goBack = (): void => {
    if (!isGoBackPending) {
      setIsGoBackPending(true);
      console.log('sss');
      navigate(-1);

      // eslint-disable-next-line lint-local/no-inline-callbacks
      setTimeout(() => {
        setIsGoBackPending(false);
      }, 500);
    }
  };

  return (
    <Wrapper id="back" onClick={goBack}>
      <IconWrapper>
        <LeftOutlined />
      </IconWrapper>
    </Wrapper>
  );
};

export default Back;
