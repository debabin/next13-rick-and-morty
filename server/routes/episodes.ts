import axios from 'axios';
import { z } from 'zod';

import { wrapSuccess, trpc } from '../utils';

export const episodesRouter = trpc.router({
  getEpisodes: trpc.procedure
    .input(
      z
        .object({
          params: z
            .object({
              multiple: z.string().optional(),
              page: z.number().optional()
            })
            .optional(),
          filters: z
            .object({
              status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')])
            })
            .optional()
        })
        .optional()
    )
    .query(async ({ input }) => {
      const episodesResponse = await axios<Episode[]>(
        `https://rickandmortyapi.com/api/episode/${input?.params?.multiple ?? ''}`,
        {
          params: { page: input?.params?.page }
        }
      );

      if (!Array.isArray(episodesResponse.data)) {
        return wrapSuccess([episodesResponse.data]);
      }

      return wrapSuccess(episodesResponse.data);
    })
});
