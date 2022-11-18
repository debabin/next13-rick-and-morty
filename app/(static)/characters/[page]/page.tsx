import { notFound } from 'next/navigation';
import { caller } from '@/server/routes';
import { CharacterCard } from '@/src/components';
import Link from 'next/link';

// export async function generateStaticParams() {
//   const charactersResponse = await caller.getCharacters();

//   return Array.from(Array(charactersResponse.response.info.pages).keys()).map((number) => ({
//     page: `${number + 1}`
//   }));
// }

interface CharactersPageProps {
  params: {
    page: string;
    status: Character['status'];
  };
}

const CharactersPage = async ({ params }: CharactersPageProps) => {
  // console.log('searchParams', searchParams);
  // notFound();

  const charactersResponse = await caller.getCharacters({
    params: {
      page: +params.page
    }
    // filters: params.status ? { status: params.status } : {}
  });
  const characters = charactersResponse.response.results.slice(0, 8);

  return (
    <section className='page'>
      <ul className='characters_container'>
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
      <Link href={{ pathname: '/characters/2', query: { page: 1, status: 'alive' } }}>alive</Link>
      <Link href={{ pathname: '/characters/2', query: { page: 4, status: 'dead' } }}>dead</Link>
      <Link href={{ pathname: '/characters/2', query: { page: 123123123, status: 'dead' } }}>
        next
      </Link>
      {/* <a href='/characters/2/?page=2'>next</a> */}
    </section>
  );
};

export default CharactersPage;
