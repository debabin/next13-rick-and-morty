import { z } from 'zod';

export const GAME_INPUTS = {
  diedAliveUnknown: {
    getCharacterForDiedAliveUnknown: z.object({ params: z.object({ id: z.number() }) }),
    createDeadAliveUnknown: z.object({
      params: z.object({
        name: z.string(),
        score: z.number(),
        startTime: z.number(),
        endTime: z.number()
      })
    }),
    checkCharacterStatus: z.object({
      params: z.object({
        id: z.number(),
        status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')])
      })
    })
  }
};
