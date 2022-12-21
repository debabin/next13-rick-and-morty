import { z } from 'zod';

export const EPISODE_FILTER_INPUT = z
  .object({
    name: z.string().optional()
  })
  .optional();

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
    .optional(),
  getEpisodesMultiple: z.object({
    params: z.object({
      multiple: z.number().array()
    }),
    filters: EPISODE_FILTER_INPUT
  })
};
