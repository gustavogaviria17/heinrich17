import React, { ReactElement } from 'react';
import styled from 'styled-components';

export interface IProps {
  alt: string;
  img: string;
}

export const Image = styled.img`
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(138, 150, 168, 1);
  height: auto;
  margin-right: 12px;
  width: 30px;
`;

const Icon = ({ img, alt }: IProps): ReactElement => <Image alt={alt} src={img} />;

export default Icon;
