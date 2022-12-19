import { trpc } from './trpc';

export const sleep = (sec: number) => new Promise((resolve) => setTimeout(resolve, sec * 1000));
export const sleepMiddleware = trpc.middleware(async ({ path, next }) => {
  await sleep(3);

  return next();
});
