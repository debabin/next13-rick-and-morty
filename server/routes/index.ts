import { initTRPC } from '@trpc/server';

import { rickAndMortyRouter } from './rickAndMorty';

const trpc = initTRPC.create();

export const appRouter = trpc.mergeRouters(rickAndMortyRouter);
export type AppRouter = typeof appRouter;

export const caller = appRouter.createCaller({});
