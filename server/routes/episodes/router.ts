import { getEpisode, getEpisodes, getEpisodesMultiple } from '@/utils/api';

import { wrapSuccess, trpc } from '../../utils';

import { EPISODE_INPUTS } from './schemas';

export const episodesRouter = trpc.router({
  getEpisodesInfo: trpc.procedure.query(async () => {
    const episodesResponse = await getEpisodes();

    return wrapSuccess({ info: episodesResponse.data.info });
  }),
  getEpisode: trpc.procedure.input(EPISODE_INPUTS.getEpisode).query(async ({ input }) => {
    const episodesResponse = await getEpisode({ params: { id: input.params.id } });

    return wrapSuccess(episodesResponse.data);
  }),
  getEpisodes: trpc.procedure.input(EPISODE_INPUTS.getEpisodes).query(async ({ input }) => {
    const episodesResponse = await getEpisodes({
      params: { ...input?.params }
    });

    return wrapSuccess(episodesResponse.data);
  }),
  getEpisodesMultiple: trpc.procedure
    .input(EPISODE_INPUTS.getEpisodesMultiple)
    .query(async ({ input }) => {
      const charactersResponse = await getEpisodesMultiple({
        params: { multiple: input.params.multiple, ...input?.filters }
      });

      return wrapSuccess(charactersResponse.data);
    })
});
