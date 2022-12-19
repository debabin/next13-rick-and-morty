import type { UrlObject } from 'url';
import Link from 'next/link';

import { Button, Typography } from '@/components';

import styles from './Filter.module.scss';

interface FilterInputItem {
  label: string;
  value: string;
  type: 'input';
}

interface FilterTogglesItem {
  label: string;
  value: string;
  options: { label: string; href: Omit<UrlObject, 'query'> & { query?: Record<string, any> } }[];
  type: 'toggles';
}

interface FilterProps {
  items: (FilterInputItem | FilterTogglesItem)[];
}

export const Filter: React.FC<FilterProps> = ({ items }) => {
  const filters = items.map((item, index) => {
    if (item.type === 'input') {
      return (
        <div key={index} className={styles.filter_input_container}>
          <Typography variant='sub-title-1'>
            <label htmlFor={item.label}>{item.label}</label>
          </Typography>

          <div>
            <input type='text' id={item.label} name={item.label} defaultValue={item.value} />
            <Button type='submit'>filter</Button>
          </div>
        </div>
      );
    }

    if (item.type === 'toggles') {
      return (
        <div key={index} className={styles.filter_toggles_container}>
          <Typography variant='sub-title-1'>{item.label}</Typography>
          <ul>
            {item.options.map((option) => (
              <Link key={option.label} prefetch={false} href={option.href}>
                <li role='option' aria-selected={option.label === item.value}>
                  <Typography variant='sub-title-1'>{option.label}</Typography>
                </li>
              </Link>
            ))}
          </ul>
          {item.value !== 'all' && (
            <input id={item.label} name={item.label} defaultValue={item.value} />
          )}
        </div>
      );
    }
  });
  return (
    <>
      <form className={styles.filters_form}>
        <Typography variant='title-2'>Filters</Typography>
        {filters}
      </form>
    </>
  );
};

export default Filter;
