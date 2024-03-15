import { getColor } from '@shared/helpers';
import { BREAKPOINTS } from '@shared/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: 0 auto;

  @media ${BREAKPOINTS.fromDesktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1367px;
  }
`;

export const Header = styled.header<any>`
  left: 0;
  position: absolute;
  top: 25px;
  width: 100%;

  h1 {
    color: ${getColor('text')};
    font-size: 24px;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

export const Container = styled.div<any>`
  align-items: center;
  background-color: ${getColor('blockBG')};
  border-radius: 8px;
  box-shadow: ${getColor('shadow')};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 100%;
  z-index: 2;

  #back {
    left: 20px;
    position: absolute;
    top: 20px;
    z-index: 2;
  }

  @media ${BREAKPOINTS.fromTablet} {
    width: 450px;
    height: ${({ isForReg }): string => (isForReg ? '690px' : '350px')};
  }

  @media ${BREAKPOINTS.fromDesktop} {
    margin: 0 auto;
  }
`;

export const Image = styled.img<any>`
  display: none;
  height: 100%;
  opacity: 0.8;
  position: absolute;
  width: auto;
  z-index: 1;

  @media ${BREAKPOINTS.tablet} {
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
  }

  @media ${BREAKPOINTS.fromDesktop} {
    display: block;
    border-radius: 16px;
    position: static;
    width: 90%;
    height: 90%;
    opacity: 1;
    object-fit: cover;
    box-shadow: ${getColor('shadow')};
    margin: auto;
  }
`;
