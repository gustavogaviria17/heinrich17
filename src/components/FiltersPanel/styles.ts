import { getColor } from '@shared/helpers';
import { BREAKPOINTS } from '@shared/palette';
import { styled } from 'styled-components';

export const Wrapper = styled.div<any>`
  background: ${getColor('inputBG')};
  border-radius: 6px;
  margin-bottom: 24px;
  min-height: 120px;
  padding: 12px;
  
  @media ${BREAKPOINTS.fromDesktop} {
    width: 300px;
    margin-left: 80px;
    height: 625px;
    position: fixed;
    right: 12px;
  }
`;
