import { getColor } from '@shared/helpers';
import styled from 'styled-components';

export const Container = styled.div<any>`
  align-items: center;
  color: ${getColor('text')};
  cursor: pointer;
  display: flex;
  font-size: 12px;

  img {
    border-radius: 2px;
    box-shadow: ${getColor('shadow')};
    height: auto;
    margin-right: 8px;
    width: 32px;
  }
`;
