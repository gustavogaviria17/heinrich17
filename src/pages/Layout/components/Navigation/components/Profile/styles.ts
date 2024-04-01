import { getColor } from '@shared/helpers';
import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  align-items: center;
  background-color: ${getColor('blockBG')};
  border-radius: 8px;
  display: flex;
  padding: 20px;
  position: relative;
  width: 100%;
`;

export const Avatar = styled.div`
  background-color: black;
  background-image: url(${({ url }: any): string => url});
  border-radius: 8px;
  height: 50px;
  margin-right: 12px;
  width: 50px;
`;

export const Name = styled.p<any>`
  color: ${getColor('text')};
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
