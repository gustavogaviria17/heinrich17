import React, { ReactElement } from 'react';
import { Wrapper } from '@components/Select/styles';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectDefault,
  SelectProps,
} from '@mui/material';

export interface IProps {
  options: IOption[];
}

export interface IOption {
  label: string;
  value: string | number;
}

const Select = ({
  onChange,
  value,
  id,
  label,
  labelId,
  options,
}: Omit<SelectProps, 'variant'> & IProps): ReactElement => {
  const renderOption = ({ label, value }: IOption): ReactElement => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  );

  return (
    <Wrapper>
      <FormControl fullWidth={true}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <SelectDefault
          id={id}
          label={label}
          labelId={labelId}
          onChange={onChange}
          size="small"
          value={value}
          variant="outlined"
        >
          {options.map(renderOption)}
        </SelectDefault>
      </FormControl>
    </Wrapper>
  );
};

export default Select;
