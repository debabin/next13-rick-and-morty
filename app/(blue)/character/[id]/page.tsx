import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { caller } from '@/server/routes';
import { Characters, Typography } from '@/src/components';
import { ROUTES } from '@/src/utils';

import Episodes from './Episodes/Episodes';

import styles from './page.module.scss';

export async function generateStaticParams() {
  const charactersCount = (await caller.getCharactersInfo()).response.info.count;

  return Array.from({ length: charactersCount }, (_: any, index: number) => index + 1).map(
    (id) => ({
      id: id.toString()
    })
  );
}

interface CharacterPageProps {
  params: {
    id: string;
  };
}

export const revalidate = 0;
export const dynamic = 'force-dynamic';
const CharacterPage = async ({ params }: CharacterPageProps) => {
  if (+params.id === 1) return notFound();

  const characterResponse = await caller.getCharacter({
    params: {
      id: +params.id
    }
  });

  const character = characterResponse.response;

  return (
    <section className='page'>
      <Typography tag='h1' variant='title-2'>
        {character.name}
      </Typography>
      <div className={styles.character_container}>
        <div className={styles.image_container}>
          <Image src={character.image} alt={character.name} fill />
        </div>

        <div className={styles.info}>
          <Characters.Status species={character.species} status={character.status} />

          <Typography tag='span' variant='sub-title-2'>
            Last known location:
          </Typography>

          <Typography tag='span' variant='body-1'>
            <Link
              prefetch={false}
              href={`${ROUTES.LOCATION}/${character.location.url.replace(/^\D+/g, '')}`}
            >
              {character.location.name}
            </Link>
          </Typography>
        </div>
      </div>

      <Typography tag='h1' variant='title-2'>
        Episodes
      </Typography>
      <Episodes episode={character.episode} />
    </section>
  );
};

export default CharacterPage;
