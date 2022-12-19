import { z } from 'zod';

export const EPISODE_INPUTS = {
  getEpisode: z.object({ params: z.object({ id: z.number() }) }),
  getEpisodes: z
    .object({
      params: z
        .object({
          page: z.number().optional()
        })
        .optional()
    })
    .optional()
};
