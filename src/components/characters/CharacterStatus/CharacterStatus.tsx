import classnames from 'classnames';

import { Typography } from '@/components';

import styles from './CharacterStatus.module.scss';

interface CharacterStatusProps {
  status: Character['status'];
  species: Character['species'];
}

export const CharacterStatus: React.FC<CharacterStatusProps> = ({ status, species }) => (
  <Typography tag='span' variant='body-2'>
    <span className={classnames(styles.status, styles[status.toLocaleLowerCase()])} />
    {status.toLocaleLowerCase()} - {species.toLocaleLowerCase()}
  </Typography>
);
