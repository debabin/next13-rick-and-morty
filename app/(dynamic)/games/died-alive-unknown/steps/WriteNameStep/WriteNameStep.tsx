'use client';
import React from 'react';

import { Typography, Button } from '@/components';
import { useForm } from '@/src/utils';

type FieldError = string | null;
type Form = {
  values: {
    name: string;
  };
  errors: {
    name: FieldError;
  };
};

interface WriteNameProps {
  next: (value: { name: string }) => void;
}

const WriteNameStep: React.FC<WriteNameProps> = ({ next }) => {
  const form = useForm({ initialValues: { name: '' } });

  const onClick = () => {
    if (!form.values.name.length) return form.setFieldError('name', 'Field required');

    next({ name: form.values.name });
  };

  return (
    <>
      <Typography variant='title-1' tag='label'>
        Game
      </Typography>
      <input
        type='text'
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.target.value)}
      />
      <Button onClick={onClick}>start</Button>
    </>
  );
};

export default WriteNameStep;
