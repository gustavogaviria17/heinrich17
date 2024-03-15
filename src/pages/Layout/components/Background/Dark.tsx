import React, { ReactElement } from 'react';
import styled, { css, keyframes } from 'styled-components';

const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

const Container = styled.div`
  background-color: #000;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
`;

const Star = styled.div<any>`
  ${({ animation, duration }: any): any =>
    css`
      animation: ${animation} ${duration} infinite linear;
    `};
  background: transparent;
  box-shadow: ${({ shadows }: any): any => shadows};
  height: ${({ size }: any): any => size}px;
  width: ${({ size }: any): any => size}px;

  &:after {
    background: transparent;
    box-shadow: ${({ shadows }: any): any => shadows};
    content: ' ';
    height: ${({ size }: any): any => size}px;
    position: absolute;
    top: 2000px;
    width: ${({ size }: any): any => size}px;
  }
`;

const Dark = (): ReactElement => {
  const shadowsSmall = Array.from(
    { length: 700 },
    () => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`,
  ).join(',');
  const shadowsMedium = Array.from(
    { length: 200 },
    () => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`,
  ).join(',');
  const shadowsBig = Array.from({ length: 100 }, () => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`).join(
    ',',
  );

  return (
    <Container>
      <Star animation={animStar} duration="50s" shadows={shadowsSmall} size={1} />
      <Star animation={animStar} duration="100s" shadows={shadowsMedium} size={2} />
      <Star animation={animStar} duration="150s" shadows={shadowsBig} size={3} />
    </Container>
  );
};

export default Dark;
