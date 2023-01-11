'use client';
import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';

import { useStore } from '@/app/store-provider';
import { Button, Typography } from '@/components';
import { getRandomCharactersId } from '@/utils/helpers';
import { trpc } from '@/utils/hooks';

import styles from './GameStep.module.scss';

interface GameStepProps {
  next: () => void;
  game: DeadAliveUnknownGame;
}

const INITIAL_PORTALS = 3;

const GameStep: React.FC<GameStepProps> = ({ game, next }) => {
  const [answerStatus, setAnswerStatus] = React.useState<'right' | 'wrong' | 'null'>('null');
  const [portals, setPortals] = React.useState(INITIAL_PORTALS);
  const [score, setScore] = React.useState(0);

  const { counts } = useStore();
  const [characterId, setCharacterId] = React.useState(getRandomCharactersId(counts.character));

  const getCharacterForDeadOrAliveOrUnknownGameQuery =
    trpc.getCharacterForDiedAliveUnknown.useQuery(
      {
        params: { id: characterId }
      },
      {
        enabled: game.status === 'started'
      }
    );

  const createDeadAliveUnknownMutation = trpc.createDeadAliveUnknown.useMutation({
    onError: next
  });
  const checkCharacterStatusMutation = trpc.checkCharacterStatus.useMutation();

  const onOptionClick = async (answer: Character['status']) => {
    const checkCharacterStatusResponse = await checkCharacterStatusMutation.mutateAsync({
      params: { id: characterId, status: answer }
    });
    const isCorrectAnswer = checkCharacterStatusResponse.success;
    const updatedPortals = portals + (isCorrectAnswer ? 0 : -1);
    const isGameOver = !isCorrectAnswer && updatedPortals === 0;

    setAnswerStatus(isCorrectAnswer ? 'right' : 'wrong');
    setPortals(updatedPortals);
    setScore(score + (isCorrectAnswer ? 1 : 0));

    if (isGameOver) {
      await createDeadAliveUnknownMutation.mutateAsync({
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

  const isLoading =
    getCharacterForDeadOrAliveOrUnknownGameQuery.isLoading ||
    createDeadAliveUnknownMutation.isLoading;

  console.log('@', answerStatus);
  return (
    <div className={styles.step}>
      <div className={styles.user}>
        <Typography variant='title-2'>Data</Typography>
        <div>
          <Typography variant='body-1'>Your name:</Typography>
          <Typography variant='sub-title-1'>{game.name}</Typography>
          <Typography variant='body-1'>Portals:</Typography>
          <Typography variant='sub-title-1'>{portals}</Typography>
        </div>
        <div>
          <Typography variant='body-1'>Score:</Typography>
          <Typography variant='sub-title-1'>{score}</Typography>
        </div>
      </div>
      <div className={styles.game}>
        <div className={styles.character}>
          {getCharacterForDeadOrAliveOrUnknownGameQuery.data?.success && (
            <Image
              src={getCharacterForDeadOrAliveOrUnknownGameQuery.data.response.image}
              alt={getCharacterForDeadOrAliveOrUnknownGameQuery.data.response.id.toString()}
              fill
            />
          )}
        </div>

        <Typography variant='body-1'>choose option</Typography>
        <div
          onAnimationEnd={() => setAnswerStatus('null')}
          className={classnames(styles.buttons, styles[answerStatus])}
        >
          <Button disabled={isLoading} onClick={() => onOptionClick('dead')}>
            🙈 dead
          </Button>
          <Button disabled={isLoading} onClick={() => onOptionClick('alive')}>
            🙉 alive
          </Button>
          <Button disabled={isLoading} onClick={() => onOptionClick('unknown')}>
            🙊 unknown
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GameStep;
