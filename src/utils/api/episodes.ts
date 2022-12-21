import type { AxiosRequestConfig } from 'axios';

import { api } from './api';

export interface GetEpisodeParams {
  params: {
    id: Episode['id'];
  };
  config?: AxiosRequestConfig;
}

export const getEpisode = async ({ params, config }: GetEpisodeParams) =>
  await api.get<Episode>(`episode/${params.id}`, { ...config });

export interface GetEpisodesParams {
  params?: EpisodeFilter;
  config?: AxiosRequestConfig;
}

export const getEpisodes = async ({ params, config }: GetEpisodesParams = {}) =>
  await api.get<Result<Episode>>('episode', { ...config, params });

export interface GetEpisodesMultipleParams {
  params: {
    multiple: Episode['id'][];
  } & EpisodeFilter;
  config?: AxiosRequestConfig;
}

export const getEpisodesMultiple = async ({
  params: { multiple, ...params },
  config
}: GetEpisodesMultipleParams) => {
  const episodesMultipleResponse = await api.get<Episode[] | Episode>(`episode/${multiple}`, {
    ...config,
    params
  });

  if (Array.isArray(episodesMultipleResponse.data)) {
    const data = episodesMultipleResponse.data;
    return { ...episodesMultipleResponse, data };
  }

  return { ...episodesMultipleResponse, data: [episodesMultipleResponse.data] };
};
