import Link from 'next/link';
import React from 'react';

import { Typography } from '@/src/components';
import { ROUTES } from '@/src/utils';

import styles from './page.module.scss';

const GamesPage = () => (
  <>
    <div className={styles.games}>
      <Link prefetch={false} href={ROUTES.GAME_PORTAL_FIGHT}>
        <div className={styles.game}>
          <Typography variant='title-1' tag='h2'>
            Portal fight
          </Typography>

          <Typography variant='sub-title-1' tag='p'>
            Choose the strongest character
          </Typography>
        </div>
      </Link>
      <Link prefetch={false} href={ROUTES.GAME_DIED_ALIVE_UNKNOWN}>
        <div className={styles.game}>
          <Typography variant='title-1' tag='h2'>
            Died Alive Unknown
          </Typography>
          <Typography variant='sub-title-1' tag='p'>
            Who or What is died or alive or unknown
          </Typography>
        </div>
      </Link>
    </div>
    <div className={styles.results}>
      <Typography variant='sub-title-1' tag='h2'>
        <Link prefetch={false} href={ROUTES.GAME_RESULTS}>
          Results
        </Link>
      </Typography>
    </div>
  </>
);

export default GamesPage;
