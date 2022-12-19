import React from 'react';

import { Typography } from '../../Typography/Typography';

import styles from '../banners.module.scss';

export const StaticBanner = () => (
  <div className={styles.static_banner}>
    <Typography variant='title-1' tag='h2'>
      🧊 static page
    </Typography>
    <Typography variant='sub-title-1' tag='p'>
      this page is static, it create per build time
    </Typography>
  </div>
);

export default StaticBanner;
