import React from 'react';

import { Typography } from '../../Typography/Typography';

import styles from '../banners.module.scss';

export const BlueBanner = () => (
  <div className={styles.static_banner}>
    <Typography variant='title-1' tag='h2'>
      🧊 blue banner
    </Typography>
    <Typography variant='sub-title-1' tag='p'>
      this just random banner for demonstrate power of next 13
    </Typography>
  </div>
);

export default BlueBanner;
