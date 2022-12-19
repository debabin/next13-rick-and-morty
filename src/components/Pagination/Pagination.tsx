import type { UrlObject } from 'url';
import React from 'react';
import Link from 'next/link';

import { IconButton } from '@/components';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';

import styles from './Pagination.module.scss';

interface DynamicPaginationProps {
  page: number;
  pagesCount: number;
  onClick: (page: number) => void;
}

interface StaticPaginationProps {
  page: number;
  pagesCount: number;
  href: Omit<UrlObject, 'query'> & { query?: Record<string, any> };
}

type PaginationProps = DynamicPaginationProps | StaticPaginationProps;

export const Pagination: React.FC<PaginationProps> = ({ page, pagesCount, ...props }) => {
  return (
    <div className={styles.pagination}>
      {page - 1 !== 0 && (
        <>
          {'href' in props && (
            <Link
              href={{
                ...props.href,
                query: { ...props.href.query, page: page - 1 }
              }}
            >
              <IconButton icon={<ArrowLeftIcon />} />
            </Link>
          )}
          {'onClick' in props && (
            <IconButton
              {...(props.onClick && { onClick: () => props.onClick(page - 1) })}
              icon={<ArrowLeftIcon />}
            />
          )}
        </>
      )}
      {page + 1 !== pagesCount && (
        <>
          {'href' in props && (
            <Link
              href={{
                ...props.href,
                query: { ...props.href.query, page: page + 1 }
              }}
            >
              <IconButton icon={<ArrowRightIcon />} />
            </Link>
          )}
          {'onClick' in props && (
            <IconButton
              {...(props.onClick && { onClick: () => props.onClick(page + 1) })}
              icon={<ArrowLeftIcon />}
            />
          )}
        </>
      )}
    </div>
  );
};
