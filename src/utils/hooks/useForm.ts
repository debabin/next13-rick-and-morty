import React from 'react';

export interface UseForm<Values> {
  initialValues: Values;
  onSubmit?: (values: Values) => void;
}

type FieldError = string | null;
type Form<Values> = {
  values: Values;
  errors?: {
    [Key in keyof Values]?: FieldError;
  };
};

export const useForm = <Values>({ initialValues, onSubmit }: UseForm<Values>) => {
  const [form, setForm] = React.useState<Form<Values>>({ values: initialValues });

  const setFieldValue = <Field extends keyof Values>(field: Field, value: Values[Field]) => {
    setForm({ ...form, values: { ...form.values, [field]: value } });
  };

  const setFieldError = <Field extends keyof Values>(field: Field, error: string) => {
    setForm({ ...form, errors: { ...form.errors, [field]: error } });
  };

  return {
    ...form,
    setFieldValue,
    setFieldError,
    handleSubmit: (event: React.SyntheticEvent) => {
      event.preventDefault();

      onSubmit && onSubmit(form.values);
    }
  };
};
