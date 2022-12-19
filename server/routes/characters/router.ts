import { getCharacters, getCharacter, getCharactersMultiple } from '@/utils/api';
import { z } from 'zod';

import { wrapSuccess, trpc, procedure } from '../../utils';
import { CHARACTER_INPUTS } from './schemas';

export const charactersRouter = trpc.router({
  getCharactersInfo: trpc.procedure
    .input(CHARACTER_INPUTS.getCharactersInfo)
    .query(async ({ input }) => {
      const charactersResponse = await getCharacters({ params: input?.filters });

      return wrapSuccess({ info: charactersResponse.data.info });
    }),
  getCharacterForDeadOrAliveOrUnknownGame: trpc.procedure
    .input(z.object({ params: z.object({ id: z.number() }) }))
    .query(async ({ input }) => {
      const characterResponse = await getCharacter({ params: { id: input.params.id } });

      const character = {
        id: characterResponse.data.id,
        image: characterResponse.data.image,
        name: characterResponse.data.name
      };

      return wrapSuccess(character);
    }),
  getCharacter: procedure.input(CHARACTER_INPUTS.getCharacter).query(async ({ input }) => {
    const characterResponse = await getCharacter({ params: { id: input.params.id } });

    return wrapSuccess(characterResponse.data);
  }),
  getCharacters: procedure.input(CHARACTER_INPUTS.getCharacters).query(async ({ input }) => {
    const charactersResponse = await getCharacters({
      params: { ...input?.filters, ...input?.params }
    });

    return wrapSuccess(charactersResponse.data);
  }),
  getCharactersMultiple: trpc.procedure
    .input(CHARACTER_INPUTS.getCharactersMultiple)
    .query(async ({ input }) => {
      const charactersResponse = await getCharactersMultiple({
        params: { multiple: input.params.multiple, ...input?.filters }
      });

      return wrapSuccess(charactersResponse.data);
    })
});
