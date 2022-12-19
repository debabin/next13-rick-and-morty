import Link from 'next/link';

import { ROUTES } from '@/utils/constants';
import { Typography } from '@/components';

import styles from './LocationCard.module.scss';

interface LocationCardProps {
  location: Location;
}

export const LocationCard: React.FC<LocationCardProps> = ({ location }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <Typography tag='span' variant='body-1'>
        {location.dimension}
      </Typography>
      <Typography tag='h2' variant='title-2'>
        <Link prefetch={false} href={`${ROUTES.LOCATION}/${location.id}`}>
          {location.name} - {location.type}
        </Link>
      </Typography>
    </div>
  </div>
);
