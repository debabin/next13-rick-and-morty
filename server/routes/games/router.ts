import { getCharacter } from '@/utils/api';

import { prisma, trpc, wrapFailure, wrapSuccess } from '../../utils';

import { GAME_INPUTS } from './shemas';

export const diedAliveUnknownRouter = trpc.router({
  getCharacterForDiedAliveUnknown: trpc.procedure
    .input(GAME_INPUTS.diedAliveUnknown.getCharacterForDiedAliveUnknown)
    .query(async ({ input }) => {
      const characterResponse = await getCharacter({ params: { id: input.params.id } });

      const character = {
        id: characterResponse.data.id,
        image: characterResponse.data.image,
        name: characterResponse.data.name
      };

      return wrapSuccess(character);
    }),
  createDeadAliveUnknown: trpc.procedure
    .input(GAME_INPUTS.diedAliveUnknown.createDeadAliveUnknown)
    .mutation(async ({ input }) => {
      const { startTime, endTime, ...params } = input.params;
      const createChallengeResponse = await prisma.deadAliveUnknownGame.create({
        data: {
          ...params,
          startTime: startTime.toString(),
          timeOfGame: (endTime - startTime).toString()
        }
      });

      return wrapSuccess(createChallengeResponse);
    }),
  checkCharacterStatus: trpc.procedure
    .input(GAME_INPUTS.diedAliveUnknown.checkCharacterStatus)
    .mutation(async ({ input }) => {
      const characterResponse = await getCharacter({ params: { id: input.params.id } });

      const isStatusCorrect = input.params.status === characterResponse.data.status.toLowerCase();
      if (isStatusCorrect) return wrapSuccess(true);
      return wrapFailure(false);
    }),
  getBestPlayersOfDiedAliveUnknown: trpc.procedure.mutation(async () => {
    const bestPlayers = await prisma.deadAliveUnknownGame.findMany({
      orderBy: {
        score: 'asc'
      },
      take: 5
    });

    return wrapSuccess(bestPlayers);
  })
});

export const gamesRouter = trpc.mergeRouters(diedAliveUnknownRouter);
