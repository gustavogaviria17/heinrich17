import React, { ReactElement, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import Select, { IOption } from '@components/Select';
import Spinner from '@components/Spinner';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, SelectChangeEvent } from '@mui/material';
import { EMAIL, PASSWORD } from '@shared/helpers';
import { checkFormIsDisabled } from '@shared/helpers/checkFormIsDisabled';
import { useStoreStatus } from '@shared/hooks';
import useAuthStore from '@store/auth';
import { getFields } from '@store/config';
import useUserStore from '@store/user';
import { Button, Checkbox, Tooltip } from 'antd';
import { countries } from 'countries-list';
import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

import { Adornment, Control, Form as FormStyle } from './styles';

const SignupForm = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const requiredFields = ['name', 'email', 'password', 'dob', 'passwordConfirm'];
  const [isShowPassword, setShowPassword] = useState<boolean>(false);

  const { signup, statuses } = useStoreStatus(useAuthStore(getFields('signup')));
  const { setUser } = useStoreStatus(useUserStore(getFields('setUser')));

  const handleClickShowPassword = (): void => setShowPassword((show: boolean) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
  };

  const onSubmit = async (values: FormikValues): Promise<void> => {
    const user = await signup(values);
    setUser(user);

    user && navigate('/');
  };

  const onReset = (): void => {
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      country: '',
      creator: false,
      dob: '',
      email: '',
      name: '',
      password: '',
      passwordConfirm: '',
      wallet: '',
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      country: Yup.string().required(t('commonErrors.required')),
      email: Yup.string()
        .test('email', t('auth.validation.email'), (value: string | undefined) =>
          EMAIL.test(value as string),
        )
        .required(t('commonErrors.required')),
      name: Yup.string().required(t('commonErrors.required')),
      password: Yup.string()
        .test('password', t('auth.validation.password'), (value: string | undefined) =>
          PASSWORD.test(value as string),
        )
        .required(t('commonErrors.required')),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password')], t('auth.validation.confirm'))
        .required(t('commonErrors.required')),
    }),
  });

  const {
    values,
    handleSubmit,
    handleChange,
    setFieldValue,
    touched,
    handleBlur,
    errors,
    resetForm,
  } = formik;

  const { email, password, country, dob, passwordConfirm, name, wallet, creator } = values;
  const passwordInform = t('auth.registration.help');
  const isDisabled = checkFormIsDisabled(values, errors, requiredFields) || statuses?.isLoading;

  const onSelectChange = ({ target: { value } }: SelectChangeEvent<unknown>): void => {
    setFieldValue('country', value);
  };

  const toOptions = ({ name, native }: any): IOption => ({
    label: native,
    value: name,
  });

  const options = Object.values(countries).map(toOptions);

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Input
        error={!!errors.name && touched.name}
        helperText={touched.name ? errors.name : undefined}
        id="name"
        label={t('auth.registration.name')}
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        value={name}
      />

      <Input
        error={!!errors.email && touched.email}
        helperText={touched.email ? errors.email : undefined}
        id="email"
        label={t('auth.registration.email')}
        name="email"
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        value={email}
      />
      <Input
        error={!!errors.dob && touched.dob}
        helperText={touched.dob ? errors.dob : undefined}
        id="dob"
        label={t('auth.registration.dob')}
        name="dob"
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        value={dob}
      />
      <Select
        id="country"
        label={t('auth.registration.country')}
        onChange={onSelectChange}
        options={options}
        value={country}
      />
      <Checkbox
        checked={creator}
        name="creator"
        onChange={handleChange}
        style={{ marginBottom: 20 }}
      >
        {t('auth.registration.creator')}
      </Checkbox>
      <Input
        disabled={!creator}
        error={!!errors.wallet && touched.wallet}
        helperText={touched.wallet ? errors.wallet : undefined}
        id="wallet"
        label={t('auth.registration.wallet')}
        name="wallet"
        onBlur={handleBlur}
        onChange={handleChange}
        value={wallet}
      />

      <Input
        error={!!errors.password && touched.password}
        helperText={touched.password ? errors.password : undefined}
        id="password"
        InputProps={{
          endAdornment: (
            <Adornment>
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              <Tooltip placement="top" title={passwordInform}>
                <HelpIcon height={10} width={10} />
              </Tooltip>
            </Adornment>
          ),
        }}
        label={t('auth.registration.password')}
        name="password"
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        type={isShowPassword ? 'text' : 'password'}
        value={password}
      />
      <Input
        error={!!errors.passwordConfirm && touched.passwordConfirm}
        helperText={touched.passwordConfirm ? errors.passwordConfirm : undefined}
        id="passwordConfirm"
        InputProps={{
          endAdornment: (
            <Adornment>
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
              <Tooltip placement="top" title={passwordInform}>
                <HelpIcon height={10} width={10} />
              </Tooltip>
            </Adornment>
          ),
        }}
        label={t('auth.registration.confirm')}
        name="passwordConfirm"
        onBlur={handleBlur}
        onChange={handleChange}
        required={true}
        type={isShowPassword ? 'text' : 'password'}
        value={passwordConfirm}
      />
      <Control>
        <Button disabled={isDisabled} htmlType="submit" size="large" type="primary">
          {statuses?.isLoading ? <Spinner /> : t('auth.registration.submit')}
        </Button>
        <Button disabled={statuses?.isLoading} htmlType="reset" onClick={onReset} size="large">
          {t('auth.registration.clear')}
        </Button>
      </Control>
    </FormStyle>
  );
};

export default SignupForm;
