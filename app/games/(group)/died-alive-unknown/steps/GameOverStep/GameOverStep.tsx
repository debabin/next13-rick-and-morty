'use client';
import React from 'react';

import { Button, Typography } from '@/components';

import styles from './GameOver.module.scss';

interface GameOverStepProps {
  next: () => void;
}

const GameOverStep: React.FC<GameOverStepProps> = ({ next }) => {
  const onGameRestart = () => {
    next();
  };

  return (
    <div className={styles.step}>
      <Typography variant='sub-title-1'>you lose</Typography>
      <Button onClick={() => onGameRestart()}>restart</Button>
    </div>
  );
};

export default GameOverStep;
