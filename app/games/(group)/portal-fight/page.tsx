'use client';
import Link from 'next/link';
import React from 'react';

import { Typography } from '@/src/components';
import { ROUTES } from '@/src/utils';

import styles from './page.module.scss';

const PortalFightPage = () => (
  <div className={styles.portal_fight}>
    <Typography variant='banner'>Work in progress</Typography>
    <Typography variant='sub-title-1'>resource not available in this universe</Typography>
    <Typography variant='body-1'>
      <Link href={ROUTES.GAMES}>Go to Games</Link>
    </Typography>
  </div>
);

export default PortalFightPage;
