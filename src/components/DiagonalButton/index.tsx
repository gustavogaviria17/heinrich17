import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getColor } from '@shared/helpers';
import styled from 'styled-components';

// Создаем стилизованные компоненты для кнопок
const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 113%;
`;

const Button = styled.button<any>`
  background-color: ${getColor('accent')};
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  flex: 1;
  font-size: 18px;
  height: 48px;
  line-height: 1.5;
  overflow: hidden;
  padding: 7px 15px;
  position: relative;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${getColor('accentHover')};
  }
`;

const LeftButton = styled(Button)`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  clip-path: polygon(0 0, 100% 0, 75% 100%, 0 100%);
`;

const RightButton = styled(Button)`
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0 100%);
  left: -36px;
  position: relative;
`;

// Создаем компонент кнопки состоящей из двух горизонтальных кнопок
const DiagonalButton: React.FC = () => {
  const navigate = useNavigate();

  const toLogin = (): void => {
    navigate('/login');
  };

  const toSignup = (): void => {
    navigate('/signup');
  };

  return (
    <ButtonWrapper>
      <LeftButton onClick={toLogin}>
        <NavLink to="/login">LOGIN</NavLink>
      </LeftButton>
      <RightButton onClick={toSignup}>
        <NavLink to="/signup">SIGN UP</NavLink>
      </RightButton>
    </ButtonWrapper>
  );
};

export default DiagonalButton;
