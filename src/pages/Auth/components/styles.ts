import { getColor } from '@shared/helpers';
import { BREAKPOINTS } from '@shared/palette';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  align-items: center;
  background-color: ${getColor('blockBG')};
  border-radius: 8px;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 20px;
  position: relative;
  width: 100%;

  @media ${BREAKPOINTS.fromTablet} {
    width: 450px;
    height: 300px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .MuiFormControl-root {
    margin-bottom: 28px;
  }

  .MuiTextField-root {
    margin-bottom: 28px;
    width: 100%;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Control = styled.div`
  display: flex;

  button {
    margin-right: 20px;
    width: calc(50% - 10px);

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const Adornment = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;

  svg {
    cursor: pointer;

    path {
      fill: #707070;
    }
  }
`;
