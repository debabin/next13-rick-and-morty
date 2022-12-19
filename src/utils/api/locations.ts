import type { AxiosRequestConfig } from 'axios';

import { api } from './api';

export interface GetLocationParams {
  params: {
    id: Location['id'];
  };
  config?: AxiosRequestConfig;
}

export const getLocation = async ({ params, config }: GetLocationParams) =>
  await api.get<Location>(`location/${params.id}`, { ...config });

export interface GetLocationsParams {
  params?: LocationFilter;
  config?: AxiosRequestConfig;
}

export const getLocations = async ({ params, config }: GetLocationsParams = {}) =>
  await api.get<Result<Location>>('location', { ...config, params });
