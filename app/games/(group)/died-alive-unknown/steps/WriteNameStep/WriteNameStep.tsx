'use client';
import React from 'react';

import { Button, Input, Typography } from '@/components';
import { useForm } from '@/utils/hooks';

import styles from './WriteNameStep.module.scss';

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
    <div className={styles.step}>
      <label htmlFor='write_name_input'>
        <Typography variant='sub-title-1' tag='span'>
          Write your name
        </Typography>
      </label>
      <Input
        id='write_name_input'
        type='text'
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.target.value)}
      />
      <Button onClick={onClick}>start</Button>
    </div>
  );
};

export default WriteNameStep;
