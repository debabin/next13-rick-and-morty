import { initTRPC } from '@trpc/server';

import { charactersRouter } from './characters/router';
import { episodesRouter } from './episodes/router';
import { locationsRouter } from './locations/router';
import { gamesRouter } from './games';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(
  charactersRouter,
  episodesRouter,
  locationsRouter,
  gamesRouter
);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
