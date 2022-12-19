import React from 'react';

import { Typography } from '../../Typography/Typography';

import styles from '../banners.module.scss';

export const DynamicBanner = () => (
  <div className={styles.dynamic_banner}>
    <Typography variant='title-1' tag='h2'>
      🔥 dynamic page
    </Typography>
    <Typography variant='sub-title-1' tag='p'>
      this page is not static, it rerender every time on request or update after special time
    </Typography>
  </div>
);

export default DynamicBanner;
