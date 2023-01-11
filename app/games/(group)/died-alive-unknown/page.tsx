'use client';
import React from 'react';

import { Typography } from '@/components';

import GameOverStep from './steps/GameOverStep/GameOverStep';
import GameStep from './steps/GameStep/GameStep';
import WriteNameStep from './steps/WriteNameStep/WriteNameStep';

import styles from './page.module.scss';

const INITIAL_GAME = {
  status: 'not-started',
  name: '',
  startTime: 0
} as const;

const DeadAliveUnknownPage = () => {
  const [deadAliveUnknownGame, setDeadAliveUnknownGame] =
    React.useState<DeadAliveUnknownGame>(INITIAL_GAME);

  return (
    <div className={styles.died_alive_unknown}>
      <Typography variant='title-1'>Died or Alive or Unknown</Typography>

      {deadAliveUnknownGame.status === 'not-started' && (
        <WriteNameStep
          next={(values) =>
            setDeadAliveUnknownGame({
              ...deadAliveUnknownGame,
              name: values.name,
              status: 'started',
              startTime: new Date().valueOf()
            })
          }
        />
      )}
      {deadAliveUnknownGame.status === 'started' && (
        <GameStep
          game={deadAliveUnknownGame}
          next={() => setDeadAliveUnknownGame({ ...deadAliveUnknownGame, status: 'gameOver' })}
        />
      )}
      {deadAliveUnknownGame.status === 'gameOver' && (
        <GameOverStep next={() => setDeadAliveUnknownGame(INITIAL_GAME)} />
      )}
    </div>
  );
};

export default DeadAliveUnknownPage;
