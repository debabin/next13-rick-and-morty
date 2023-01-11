import Layout from '@/components/layout';
import { caller } from '@/server/routes';
import { TRPCProvider } from '@/utils/hooks/trpc';

import StoreProvider from './store-provider';

import '../styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

const seo = {
  title: '🔫 Rick and Morty app',
  description: 'Omg morty ?'
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  const [characterCount, episodesCount, locationsCount] = await Promise.all([
    (await caller.getCharactersInfo()).response.info.count,
    (await caller.getEpisodesInfo()).response.info.count,
    (await caller.getLocationsInfo()).response.info.count
  ]);

  const counts = {
    character: characterCount,
    episode: episodesCount,
    location: locationsCount
  };

  return (
    <html>
      <head>
        <title>{seo.title}</title>
        <meta name='description' content={seo.description} />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body className='container'>
        <StoreProvider
          value={{
            counts
          }}
        >
          <TRPCProvider>
            <Layout.Header />
            {children}
            {/* @ts-ignore */}
            <Layout.Footer />
          </TRPCProvider>
        </StoreProvider>
      </body>
    </html>
  );
};

export default RootLayout;
