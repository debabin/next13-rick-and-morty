import { caller } from '@/server/routes';

interface CharactersPageProps {
  params: {
    id: string;
  };
}

const Head = async ({ params }: CharactersPageProps) => {
  const characterResponse = await caller.getCharacter({
    params: {
      id: +params.id
    }
  });
  const character = characterResponse.response;

  return (
    <>
      <title>{character.name}</title>
    </>
  );
};

export default Head;
