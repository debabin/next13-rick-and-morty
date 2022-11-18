import { initTRPC } from '@trpc/server';

import { charactersRouter } from './characters';
import { episodesRouter } from './episodes';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(charactersRouter, episodesRouter);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
