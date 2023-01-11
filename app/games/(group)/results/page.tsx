import React from 'react';

import { Typography } from '@/components';
import { caller } from '@/server/routes';

import styles from './page.module.scss';

export const revalidate = 0;
export const dynamic = 'force-dynamic';
const ResultsPage = async () => {
  const bestPlayersOfDiedAliveUnknownResponse = await caller.getBestPlayersOfDiedAliveUnknown();

  const [bestPlayer, ...bestPlayersOfDiedAliveUnknown] =
    bestPlayersOfDiedAliveUnknownResponse.response;

  return (
    <div className={styles.died_alive_unknown_container}>
      <Typography variant='title-1' tag='h1'>
        Died Alive Unknown Results
      </Typography>

      <div className={styles.best_player}>
        <Typography variant='title-2' tag='h2'>
          Best player
        </Typography>
        <div>
          <Typography variant='title-1'>{bestPlayer.name}</Typography>
          <div>
            <Typography variant='body-1'>
              time: {Math.floor(+bestPlayer.timeOfGame / 60)}
            </Typography>
            <Typography variant='title-1'>score: {bestPlayer.score}</Typography>
          </div>
        </div>
      </div>

      <div className={styles.table}>
        {bestPlayersOfDiedAliveUnknown.map((player) => (
          <div key={player.id} className={styles.row}>
            <Typography variant='sub-title-1'>{player.name}</Typography>
            <div>
              <Typography variant='body-1'>
                time: {Math.floor(+player.timeOfGame / 60)} min
              </Typography>
              <Typography variant='sub-title-2'>score: {player.score}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
