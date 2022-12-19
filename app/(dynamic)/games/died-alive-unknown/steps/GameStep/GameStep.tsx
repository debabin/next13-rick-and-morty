'use client';
import React from 'react';
import Image from 'next/image';

import { useStore } from '@/app/store-provider';
import { Typography, Button } from '@/components';
import { getRandomCharactersId } from '@/utils/helpers';
import { trpc } from '@/utils/hooks';

import styles from '../../page.module.scss';

interface GameStepProps {
  next: () => void;
  game: DeadAliveUnknownGame;
}

const INITIAL_PORTALS = 3;

const GameStep: React.FC<GameStepProps> = ({ game, next }) => {
  const [portals, setPortals] = React.useState(INITIAL_PORTALS);
  const [score, setScore] = React.useState(0);

  const { counts } = useStore();
  const [characterId, setCharacterId] = React.useState(getRandomCharactersId(counts.character));

  const getCharacterForDeadOrAliveOrUnknownGameQuery =
    trpc.getCharacterForDeadOrAliveOrUnknownGame.useQuery(
      {
        params: { id: characterId }
      },
      {
        enabled: game.status === 'started'
      }
    );

  const createDeadAliveUnknown = trpc.createDeadAliveUnknown.useMutation();
  const checkCharacterStatusMutation = trpc.checkCharacterStatus.useMutation();

  const onOptionClick = async (answer: Character['status']) => {
    const checkCharacterStatusResponse = await checkCharacterStatusMutation.mutateAsync({
      params: { id: characterId, status: answer }
    });
    const isCorrectAnswer = checkCharacterStatusResponse.success;
    const updatedPortals = portals + (isCorrectAnswer ? 0 : -1);
    const isGameOver = !isCorrectAnswer && updatedPortals === 0;

    setPortals(updatedPortals);
    setScore(score + (isCorrectAnswer ? 1 : 0));

    if (isGameOver) {
      createDeadAliveUnknown.mutateAsync({
        params: {
          score,
          name: game.name,
          startTime: game.startTime,
          endTime: new Date().valueOf()
        }
      });

      return next();
    }
    setCharacterId(getRandomCharactersId(counts.character));
  };

  return (
    <div>
      <div>
        <Typography variant='title-1'>Your name: {game.name}</Typography>
        <Typography variant='title-1'>Score: {score}</Typography>
        <Typography variant='title-1'>Portals: {portals}</Typography>
      </div>
      <div className={styles.game}>
        <Typography variant='title-1'>Dead or Alive or Unknown</Typography>

        {getCharacterForDeadOrAliveOrUnknownGameQuery.data?.success && (
          <div className={styles.character}>
            <Typography variant='sub-title-1'>
              {getCharacterForDeadOrAliveOrUnknownGameQuery.data.response.name}
            </Typography>
            <Image
              src={getCharacterForDeadOrAliveOrUnknownGameQuery.data.response.image}
              alt={getCharacterForDeadOrAliveOrUnknownGameQuery.data.response.id.toString()}
              width={300}
              height={300}
            />
          </div>
        )}

        <Typography variant='body-1'>choose option</Typography>
        <div className={styles.buttons}>
          <Button onClick={() => onOptionClick('dead')}>🙈 dead</Button>
          <Button onClick={() => onOptionClick('alive')}>🙉 alive</Button>
          <Button onClick={() => onOptionClick('unknown')}>🙊 unknown</Button>
        </div>
      </div>
    </div>
  );
};

export default GameStep;
