import axios from 'axios';
import { z } from 'zod';

import { wrapSuccess, trpc, prisma, wrapFailure } from '../utils';

export const gamesRouter = trpc.router({
  checkCharacterStatus: trpc.procedure
    .input(
      z.object({
        params: z.object({
          id: z.number(),
          status: z.union([z.literal('alive'), z.literal('dead'), z.literal('unknown')])
        })
      })
    )
    .mutation(async ({ input }) => {
      const characterResponse = await axios<Character>(
        `https://rickandmortyapi.com/api/character/${input.params.id}`
      );

      console.log(
        '@',
        input.params.status,
        characterResponse.data.status.toLowerCase(),
        input.params.status === characterResponse.data.status
      );
      const isStatusCorrect = input.params.status === characterResponse.data.status.toLowerCase();
      if (isStatusCorrect) return wrapSuccess(true);
      return wrapFailure(false);
    }),
  createDeadAliveUnknown: trpc.procedure
    .input(
      z.object({
        params: z.object({
          name: z.string(),
          score: z.number(),
          startTime: z.number(),
          endTime: z.number()
        })
      })
    )
    .mutation(async ({ input }) => {
      const { startTime, endTime, ...params } = input.params;
      console.log({
        ...params,
        startTime,
        timeOfGame: endTime - startTime
      });
      const createChallengeResponse = await prisma.deadAliveUnknownGame.create({
        data: {
          ...params,
          startTime,
          timeOfGame: endTime - startTime
        }
      });

      // const createChallengeResponse = await prisma.challenge.findMany();
      console.log('createChallengeResponse', createChallengeResponse);
      return wrapSuccess(createChallengeResponse);
    })
});
