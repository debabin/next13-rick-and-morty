import { z } from 'zod';

export const CHARACTER_FILTER_INPUT = z
  .object({
    name: z.string().optional(),
    status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')]).optional(),
    type: z.string().optional(),
    species: z.string().optional(),
    gender: z
      .union([
        z.literal('female'),
        z.literal('genderless'),
        z.literal('male'),
        z.literal('unknown')
      ])
      .optional()
  })
  .optional();

export const CHARACTER_INPUTS = {
  getCharacter: z.object({ params: z.object({ id: z.number() }) }),
  getCharacters: z
    .object({
      params: z
        .object({
          page: z.number().optional()
        })
        .optional(),
      filters: CHARACTER_FILTER_INPUT
    })
    .optional(),
  getCharactersInfo: z
    .object({
      filters: CHARACTER_FILTER_INPUT
    })
    .optional(),
  getCharactersMultiple: z.object({
    params: z.object({
      multiple: z.number().array()
    }),
    filters: CHARACTER_FILTER_INPUT
  })
};
