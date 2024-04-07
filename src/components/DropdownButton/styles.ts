import { getColor } from '@shared/helpers';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  align-items: center;
  background-color: ${getColor('bg')};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: ${({ size }): string => `${size}px`};
  justify-content: center;
  padding: 8px;
  position: relative;
  transition: filter 150ms linear;
  width: ${({ size }): string => `${size}px`};

  svg {
    height: 1.6em;
    transform: rotate(90deg);
    width: 1.6em;
    fill: ${getColor('text')};
  }

  &:hover {
    filter: contrast(90%);
  }
`;
