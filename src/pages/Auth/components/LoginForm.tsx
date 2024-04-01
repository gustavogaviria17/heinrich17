import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Input from '@components/Input';
import Spinner from '@components/Spinner';
import { EMAIL, PASSWORD } from '@shared/helpers';
import { checkFormIsDisabled } from '@shared/helpers/checkFormIsDisabled';
import { useStoreStatus } from '@shared/hooks';
import useAuthStore from '@store/auth';
import { getFields } from '@store/config';
import useUserStore from '@store/user';
import { Button } from 'antd';
import { FormikValues, useFormik } from 'formik';
import * as Yup from 'yup';

import { Control, Form } from './styles';

const LoginForm = (): ReactElement => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { signin, statuses } = useStoreStatus(useAuthStore(getFields('signin')));
  const { setUser } = useStoreStatus(useUserStore(getFields('setUser')));

  const onSubmit = async (values: FormikValues): Promise<void> => {
    const user = await signin(values.email, values.password);
    setUser(user);

    user && navigate('/');
  };

  const onReset = (): void => {
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit,
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .test('email', t('auth.validation.email'), (value: string | undefined) =>
          EMAIL.test(value as string),
        )
        .required(t('commonErrors.required')),
      password: Yup.string()
        .test('password', t('auth.validation.password'), (value: string | undefined) =>
          PASSWORD.test(value as string),
        )
        .required(t('commonErrors.required')),
    }),
  });

  const { values, handleSubmit, touched, handleChange, resetForm, errors } = formik;
  const { email, password } = values;
  const requiredFields = ['email', 'password'];
  const isDisabled = checkFormIsDisabled(values, errors, requiredFields) || statuses?.isLoading;

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        error={!!errors.email && touched.email}
        helperText={touched.email ? errors.email : undefined}
        id="email"
        label={t('auth.login.email')}
        name="email"
        onChange={handleChange}
        value={email}
      />
      <Input
        error={!!errors.password && touched.password}
        helperText={touched.password ? errors.password : undefined}
        id="password"
        label={t('auth.login.password')}
        name="password"
        onChange={handleChange}
        type="password"
        value={password}
      />
      <Control>
        <Button disabled={isDisabled} htmlType="submit" size="large" type="primary">
          {statuses?.isLoading ? <Spinner /> : t('auth.login.submit')}
        </Button>
        <Button htmlType="reset" onClick={onReset} size="large">
          {t('auth.login.clear')}
        </Button>
      </Control>
    </Form>
  );
};

export default LoginForm;
