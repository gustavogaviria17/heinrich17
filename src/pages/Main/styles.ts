import { BREAKPOINTS } from '@shared/palette';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: calc(100% - 165px);
  position: relative;
  width: 100%;

  @media ${BREAKPOINTS.fromDesktop} {
    height: 100%;
    padding: 20px;
    margin-left: 320px;
    width: calc(100% - 320px - 320px);
  }
`;
