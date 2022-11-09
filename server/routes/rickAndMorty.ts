import axios from 'axios';
import { z } from 'zod';

import { wrapSuccess, trpc } from '../utils';

export const rickAndMortyRouter = trpc.router({
  getCharacters: trpc.procedure.input(z.object({ page: z.string() })).query(async ({ input }) => {
    const charactersResponse = await axios<Result<Character>>(
      'https://rickandmortyapi.com/api/character',
      {
        params: { page: input.page }
      }
    );

    return wrapSuccess(charactersResponse);
  })
});
