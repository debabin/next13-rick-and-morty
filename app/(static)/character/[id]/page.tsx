import Image from 'next/image';
import Link from 'next/link';

import { caller } from '@/server/routes';
import { Typography, Characters } from '@/src/components';

import styles from './page.module.scss';
import Episodes from './Episodes/Episodes';
import { ROUTES } from '@/src/utils';

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

const CharacterPage = async ({ params }: CharacterPageProps) => {
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
