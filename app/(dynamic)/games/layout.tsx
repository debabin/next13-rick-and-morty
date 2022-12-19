import React from 'react';
import Link from 'next/link';

import styles from './layout.module.scss';

interface GamesLayoutProps {
  children: React.ReactNode;
}

const GamesLayout = ({ children }: GamesLayoutProps) => {
  return (
    <section className={styles.section}>
      <div>
        <Link href='/games/died-alive-unknown'>Died or Alive or Unknown</Link>
        <Link href='/games/portal-fight'>Portal Fight</Link>
      </div>

      {children}
    </section>
  );
};

export default GamesLayout;
