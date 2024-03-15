import styled from 'styled-components';

const multiplier = 1;

export const Label = styled.label`
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  background: linear-gradient(to bottom, #9e9e9e 30%, #f4f4f4);
  border-radius: 40px;
  box-shadow: 0 2px 0 0 #fff, 0 -2px 0 0 #969494;
  display: block;
  flex-shrink: 0;
  height: calc(${multiplier} * 80px);
  position: absolute;
  right: -40px;
  top: -9px;
  transform: scale(0.4);
  width: calc(${multiplier} * 185px);

  input {
    display: none;
  }

  div {
    background: linear-gradient(to bottom, #8b8c8e 20%, #f4f4f4);
    border-radius: 25px;
    display: block;
    height: calc(${multiplier} * 50px);
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: calc(${multiplier} * 145px);

    &:after {
      background: #828080;
      border-radius: 23px;
      box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.8);
      content: '';
      display: block;
      height: calc(${multiplier} * 46px);
      left: calc(${multiplier} * 2px);
      position: absolute;
      top: calc(${multiplier} * 2px);
      transition: 0.2s;
      width: calc(${multiplier} * 141px);
    }
  }

  i {
    background: linear-gradient(to top, #9e9e9e 20%, #f4f4f4);
    border-radius: 50%;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.7);
    display: block;
    height: calc(${multiplier} * 60px);
    left: calc(${multiplier} * 15px);
    position: absolute;
    top: calc(${multiplier} * 10px);
    transition: 0.25s;
    width: calc(${multiplier} * 60px);

    &:after {
      background: #d5d4d4;
      border-radius: 50%;
      content: '';
      display: block;
      height: calc(${multiplier} * 52px);
      left: calc(${multiplier} * 4px);
      position: absolute;
      top: calc(${multiplier} * 4px);
      width: calc(${multiplier} * 52px);
      z-index: 1;
    }
  }

  input:checked ~ i {
    left: calc(${multiplier} * 111px);
    top: calc(${multiplier} * 10px);
  }

  input:checked + div:after {
    background: #f7931e;
    box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.6);
  }

  input:checked + div > span {
    &:first-child {
      color: black;
      text-shadow: 0 calc(${multiplier} * 1px) 0 rgba(255, 255, 255, 0.3);
    }
    &:last-child {
      color: transparent;
      text-shadow: 0 calc(${multiplier} * 1px) 0 rgba(255, 255, 255, 0);
    }
  }

  // LABEL GRADIENT BORDER
  &:after {
    background: linear-gradient(to bottom, #969494, #fff);
    border-radius: 42px;
    content: '';
    display: block;
    height: calc(${multiplier} * 84px);
    left: -2px;
    position: absolute;
    top: -2px;
    width: calc(${multiplier} * 164px);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }

  &:focus,
  &:active {
    outline: 0;
  }
`;

export const OnText = styled.span`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: transparent;
  font-size: calc(${multiplier} * 1.2em);
  font-weight: 600;
  left: calc(${multiplier} * 20px);
  letter-spacing: 1px;
  position: absolute;
  text-shadow: 0 calc(${multiplier} * 1px) 0 rgba(255, 255, 255, 0);
  text-transform: uppercase;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.25s;
  z-index: 2;
`;

export const OffText = styled.span`
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  color: black;
  font-size: calc(${multiplier} * 1.2em);
  font-weight: 600;
  left: initial;
  letter-spacing: 1px;
  position: absolute;
  right: calc(${multiplier} * 20px);
  text-shadow: 0 calc(${multiplier} * 1px) 0 rgba(255, 255, 255, 0.2);
  text-transform: uppercase;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.25s;
  z-index: 2;
`;
