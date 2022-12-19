import { z } from 'zod';

export const LOCATION_FILTER_INPUT = z
  .object({
    name: z.string().optional(),
    type: z.string().optional()
  })
  .optional();

export const LOCATION_INPUTS = {
  getLocation: z.object({ params: z.object({ id: z.number() }) }),
  getLocations: z
    .object({
      params: z
        .object({
          page: z.number().optional()
        })
        .optional(),
      filters: LOCATION_FILTER_INPUT
    })
    .optional()
};
