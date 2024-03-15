import { getColor } from '@shared/helpers';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  backdrop-filter: blur(5px);
  background-color: ${getColor('blockBG')};
  border-radius: 16px 0 0 16px;
  box-shadow: -1px 3px 8px -1px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: calc(100% - 60px);
  left: 30px;
  padding: 20px;
  position: fixed;
  top: 30px;
  width: 350px;
`;
