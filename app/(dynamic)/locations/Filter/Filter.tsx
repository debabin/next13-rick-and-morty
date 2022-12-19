import { Button, Typography } from '@/components';
import { useForm, UseForm } from '@/utils/hooks';

import styles from './Filter.module.scss';

interface Values {
  name: string;
  type: string;
}

interface FilterProps {
  form: UseForm<Values>;
  isLoading: boolean;
}

export const Filter: React.FC<FilterProps> = ({ form, isLoading }) => {
  const { values, setFieldValue, handleSubmit } = useForm(form);

  return (
    <>
      <Typography variant='title-2'>Filter</Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_container}>
          <Typography variant='sub-title-1'>
            <label htmlFor='name'>name</label>
          </Typography>

          <input
            type='text'
            id='name'
            name='name'
            value={values.name}
            onChange={(event) => setFieldValue('name', event.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <Typography variant='sub-title-1'>
            <label htmlFor='type'>type</label>
          </Typography>

          <div>
            <input
              type='text'
              id='type'
              name='type'
              value={values.type}
              onChange={(event) => setFieldValue('type', event.target.value)}
            />
          </div>
        </div>

        <Button disabled={isLoading} type='submit'>
          filter
        </Button>
      </form>
    </>
  );
};

export default Filter;
