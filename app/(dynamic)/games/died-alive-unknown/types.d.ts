type DeadAliveUnknownGame = {
  name: string;
  status: 'not-started' | 'started' | 'gameOver';
  startTime: number;
};
