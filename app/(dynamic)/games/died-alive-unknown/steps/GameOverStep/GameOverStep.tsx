'use client';
import React from 'react';

import { Button } from '@/components';

interface GameOverStepProps {
  next: () => void;
}

const GameOverStep: React.FC<GameOverStepProps> = ({ next }) => {
  const onGameRestart = () => {
    next();
  };

  return (
    <div>
      {/* you lose {state.deadAliveUnknownGame.score} */}
      <Button onClick={() => onGameRestart()}>restart</Button>
    </div>
  );
};

export default GameOverStep;
