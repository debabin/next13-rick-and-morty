import { caller } from '@/server/routes';
import { TRPCProvider } from '@/utils/hooks/trpc';
import Layout from '@/components/layout';

import StoreProvider from './store-provider';

import '../styles/globals.scss';

interface RootLayoutProps {
  children: React.ReactNode;
}

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
        <title>rick and morty app</title>
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
