'use client';
import React from 'react';

import WriteNameStep from './steps/WriteNameStep/WriteNameStep';
import GameStep from './steps/GameStep/GameStep';
import GameOverStep from './steps/GameOverStep/GameOverStep';

const INITIAL_GAME = {
  status: 'not-started',
  name: '',
  startTime: 0
} as const;

const DeadAliveUnknownPage = () => {
  const [deadAliveUnknownGame, setDeadAliveUnknownGame] =
    React.useState<DeadAliveUnknownGame>(INITIAL_GAME);

  return (
    <>
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
    </>
  );
};

export default DeadAliveUnknownPage;
