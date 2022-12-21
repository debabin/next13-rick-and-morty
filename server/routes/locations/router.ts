import { getLocation, getLocations } from '@/utils/api';

import { wrapSuccess, trpc, wrapFailure } from '../../utils';

import { LOCATION_INPUTS } from './schemas';

export const locationsRouter = trpc.router({
  getLocationsInfo: trpc.procedure.query(async () => {
    const locationsResponse = await getLocations();

    return wrapSuccess({ info: locationsResponse.data.info });
  }),
  getLocation: trpc.procedure.input(LOCATION_INPUTS.getLocation).query(async ({ input }) => {
    const locationsResponse = await getLocation({
      params: { id: input.params.id }
    });

    return wrapSuccess(locationsResponse.data);
  }),
  getLocations: trpc.procedure.input(LOCATION_INPUTS.getLocations).query(async ({ input }) => {
    const locationsResponse = await getLocations({
      params: { ...input?.params, ...input?.filters }
    });

    return wrapSuccess(locationsResponse.data);
  })
});
