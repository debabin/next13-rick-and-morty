import React from 'react';
import Link from 'next/link';

import { Typography } from '@/components';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
  }[];
  current: { label: string };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, current }) => (
  <div className={styles.breadcrumbs}>
    {items.map((item, index) => (
      <>
        <div key={index}>
          <Typography variant='sub-title-1'>
            <Link prefetch={false} href={item.href}>
              {item.label}
            </Link>
          </Typography>
        </div>
        <div>/</div>
      </>
    ))}

    <Typography variant='sub-title-1'>{current.label}</Typography>
  </div>
);
