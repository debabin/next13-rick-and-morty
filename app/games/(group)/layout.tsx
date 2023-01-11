import Link from 'next/link';
import React from 'react';

import { Typography } from '@/src/components';
import { ROUTES } from '@/src/utils';

import styles from './layout.module.scss';

interface GamesLayoutProps {
  children: React.ReactNode;
}

const GamesLayout = ({ children }: GamesLayoutProps) => {
  return (
    <section className='page'>
      <ul className={styles.tabs}>
        <li>
          <Typography variant='title-2'>
            <Link href={ROUTES.GAME_DIED_ALIVE_UNKNOWN}>Died or Alive or Unknown</Link>
          </Typography>
        </li>
        <li>
          <Typography variant='title-2'>
            <Link href={ROUTES.GAME_PORTAL_FIGHT}>Portal Fight</Link>
          </Typography>
        </li>
        <li>
          <Typography variant='title-2'>
            <Link href={ROUTES.GAME_RESULTS}>Results</Link>
          </Typography>
        </li>
      </ul>

      <div className={styles.game}>{children}</div>
    </section>
  );
};

export default GamesLayout;
