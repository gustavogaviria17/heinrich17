import React, { ChangeEvent, FocusEvent, ReactElement } from 'react';
import { TextFieldProps } from '@mui/material';

import { DefaultInput } from './styles';

const Input = ({ name, onChange, onBlur, error, helperText, ...props }: TextFieldProps): ReactElement => {
  // const requiredText = t('commonErrors.required');

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange?.(event);
  };

  const handleOnBlur = (event: FocusEvent<HTMLInputElement>): void => {
    onBlur?.(event);
  };

  return (
    <DefaultInput
      error={!!error}
      helperText={helperText}
      name={name}
      onBlur={handleOnBlur}
      onChange={handleOnChange}
      size="small"
      {...props}
    />
  );
};

export default Input;
