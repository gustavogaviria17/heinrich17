import React, { ReactElement } from 'react';
import { ReactComponent as Cloud } from '@shared/media/cloud.svg';
import { ReactComponent as Plain } from '@shared/media/plain.svg';
import styled, { keyframes } from 'styled-components';

const paperPlaneScoping = keyframes`
  0%, 100% {
    transform: rotate(0deg) translateY(0px);
  }
  50% {
    transform: rotate(15deg) translateY(100px);
  }
`;

const cloudMovement = keyframes`
  0% {
    opacity: 0.1;
    transform: translateX(300px);
  }
  10% {
    opacity: 0.7;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 0;
    transform: translateX(-1000px);
  }
`;

export const Wrapper = styled.div`
  background-color: #85b9dd;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const PlainContainer = styled.div`
  animation: ${paperPlaneScoping} 3s ease-in-out infinite;
  height: 60px;
  margin: 15% auto;
  width: 200px;
  z-index: 3;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const CloudsContainer = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateZ(0);

  svg {
    animation-direction: forwards;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-name: ${cloudMovement};
    animation-timing-function: linear;
    opacity: 1;
    position: absolute;
    right: 0;
    top: 20%;
    width: 300px;

    &:nth-child(1) {
      animation-duration: 13.5s;
      margin-right: 150px;
      margin-top: 50px;
      width: 500px;
      z-index: 9;
    }
    &:nth-child(2) {
      margin-right: 400px;
      margin-top: 50px;
      width: 100px;
      z-index: 1;
    }
    &:nth-child(3) {
      animation-duration: 9.2s;
      margin-right: 200px;
      width: 150px;
    }
    &:nth-child(4) {
      animation-duration: 20.5s;
      margin-right: 0px;
      margin-top: 20px;
      width: 600px;
      z-index: 1;
    }
    &:nth-child(5) {
      animation-duration: 11.2s;
    }
  }
`;

const Light = (): ReactElement => {
  console.log('test');

  return (
    <Wrapper>
      <PlainContainer>
        <Plain />
      </PlainContainer>
      <CloudsContainer>
        <Cloud />
        <Cloud />
        <Cloud />
        <Cloud />
        <Cloud />
      </CloudsContainer>
    </Wrapper>
  );
};

export default Light;
