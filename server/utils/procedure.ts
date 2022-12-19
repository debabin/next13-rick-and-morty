import { sleepMiddleware } from './sleepMiddleware';
import { trpc } from './trpc';

export const procedure = trpc.procedure.use(sleepMiddleware);
