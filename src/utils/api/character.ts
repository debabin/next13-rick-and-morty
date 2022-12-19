import { AxiosRequestConfig } from 'axios';

import { api } from './api';

export interface GetCharacterParams {
  params: {
    id: Character['id'];
  };
  config?: AxiosRequestConfig;
}

export const getCharacter = async ({ params, config }: GetCharacterParams) =>
  await api.get<Character>(`character/${params.id}`, { ...config });

export interface GetCharactersParams {
  params?: CharacterFilter;
  config?: AxiosRequestConfig;
}

export const getCharacters = async ({ params, config }: GetCharactersParams = {}) =>
  await api.get<Result<Character>>('character', { ...config, params });

export interface GetCharactersMultipleParams {
  params: {
    multiple: Character['id'][];
  } & CharacterFilter;
  config?: AxiosRequestConfig;
}

export const getCharactersMultiple = async ({
  params: { multiple, ...params },
  config
}: GetCharactersMultipleParams) =>
  await api.get<Character[]>(`character/${multiple}`, { ...config, params });
