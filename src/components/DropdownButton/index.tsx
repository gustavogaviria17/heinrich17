import React, { ReactElement } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import { IProps } from './interfaces';
import { Wrapper } from './styles';

const DropdownButton = ({ options, size }: IProps): ReactElement => (
  <Dropdown menu={{ items: options }} trigger={['click']}>
    <Wrapper size={size}>
      <EllipsisOutlined />
    </Wrapper>
  </Dropdown>
);

export default DropdownButton;
