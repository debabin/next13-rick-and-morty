import Link from 'next/link';

import { Typography } from '@/src/components';
import { ROUTES } from '@/src/utils';

import styles from './not-found.module.scss';

const NotFound = () => (
  <div className={styles.not_found}>
    <Typography variant='banner'>404</Typography>

    <Typography variant='sub-title-1'>resource not available in this universe</Typography>

    <Typography variant='body-1'>
      <Link href={ROUTES.ROOT}>Go to Home </Link>
    </Typography>
  </div>
);

export default NotFound;
