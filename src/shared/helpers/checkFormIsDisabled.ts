import { FormikValues } from 'formik';

export const checkFormIsDisabled = (values: FormikValues, errors: FormikValues, requiredFields: string[]): boolean => {
  console.log({ errors });
  const checkField = (fieldName: string): boolean => values[fieldName] && values[fieldName] !== '';

  if (Object.keys(errors).length === 0 && requiredFields.every(checkField)) return false;

  return true;
};
