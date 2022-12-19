import Link from 'next/link';

import { Typography } from '@/components';
import { Logo } from '@/components/icons';
import { ROUTES } from '@/utils/constants';

import styles from './Header.module.scss';

export const Header: React.FC = () => (
  <header className={styles.header}>
    <Link prefetch={false} href={ROUTES.ROOT}>
      <Logo className={styles.logo} />
    </Link>
    <nav>
      <ul className={styles.links}>
        <li>
          <Typography variant='sub-title-2'>
            <Link prefetch={false} href={ROUTES.GAMES}>
              Games
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant='sub-title-2'>
            <Link prefetch={false} href={ROUTES.CHARACTERS}>
              Characters
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant='sub-title-2'>
            <Link prefetch={false} href={ROUTES.EPISODES}>
              Episodes
            </Link>
          </Typography>
        </li>
        <li>
          <Typography variant='sub-title-2'>
            <Link prefetch={false} href={ROUTES.LOCATIONS}>
              Locations
            </Link>
          </Typography>
        </li>
      </ul>
    </nav>
  </header>
);
