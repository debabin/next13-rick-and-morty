import * as trpcNext from '@trpc/server/adapters/next';

import { appRouter } from '@/server/routes';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({})
});
