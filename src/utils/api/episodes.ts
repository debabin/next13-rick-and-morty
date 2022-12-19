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
  params?: CharacterFilter;
  config?: AxiosRequestConfig;
}

export const getEpisodes = async ({ params, config }: GetEpisodesParams = {}) =>
  await api.get<Result<Episode>>('episode', { ...config, params });
