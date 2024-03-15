import { getColor } from '@shared/helpers';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  position: relative;
  width: 100%;

  .MuiInputBase-root {
    width: 100%;
  }
  .MuiInputLabel-root {
    color: ${getColor('accentText')};
    top: -8px;

    &.Mui-focused {
      top: 0;
    }

    &.Mui-focused:not(.Mui-error) {
      color: ${getColor('accentHover')};
    }

    &.Mui-disabled {
      color: gray;
    }
  }
  
   .MuiInputBase-root {
    background: ${getColor('inputBG')};

    &:hover:not(.Mui-error) {
      fieldset {
        border-color: ${getColor('accentHover')};
      }
    }

    &.Mui-focused:not(.Mui-error) {
      fieldset {
        border-color: ${getColor('accentHover')};
        border-width: 1px;
      }
    }

    &.Mui-disabled {
      &:hover {
        fieldset {
          border-color: rgba(0, 0, 0, 0.26);
        }
      }

      input {
        cursor: not-allowed;
        background-color: ${getColor('bg')};
      }
    }
  }

  input {
    background-color: ${getColor('inputBG')};
    border-color: ${getColor('bg')};
    border-radius: 4px;
    border-width: 2px;
    color: ${getColor('invertBG')};
    font-weight: 400;
    outline: none;
    padding: 7px 16px;
    position: relative;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: ${getColor('invertBG')};
      transition: background-color 5000s ease-in-out 0s;
    }
  }
`;
