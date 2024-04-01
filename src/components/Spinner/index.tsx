import React, { ReactElement } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export interface IProps {
  fontSize?: number;
}

const Spinner = ({ fontSize = 24 }: IProps): ReactElement => (
  <Spin indicator={<LoadingOutlined spin={true} style={{ fontSize }} />} />
);

export default Spinner;
