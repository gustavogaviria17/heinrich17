import React, { ReactElement, useState } from 'react';

import { IProps } from './interfaces';
import { Label, OffText, OnText } from './styles';

const Switcher = ({ toggleTheme }: IProps): ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxChange = (): void => {
    setIsChecked(!isChecked);
    toggleTheme();
  };

  return (
    <Label htmlFor="checkbox">
      <input checked={isChecked} id="checkbox" onChange={handleCheckboxChange} type="checkbox" />
      <div>
        <OnText>Light</OnText>
        <OffText>Dark</OffText>
      </div>
      <i />
    </Label>
  );
};

export default Switcher;
