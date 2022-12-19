import Link from 'next/link';

import { ROUTES } from '@/utils/constants';
import { Typography } from '@/components';

import styles from './EpisodeCard.module.scss';

interface EpisodeCardProps {
  episode: Episode;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episode }) => (
  <div className={styles.container}>
    <div className={styles.info}>
      <Typography tag='span' variant='body-1'>
        {new Date(episode.air_date).toLocaleDateString('en-US')}
      </Typography>
      <Typography tag='h2' variant='title-2'>
        <Link prefetch={false} href={`${ROUTES.EPISODE}/${episode.id}`}>
          {episode.episode} - {episode.name}
        </Link>
      </Typography>
    </div>
  </div>
);
