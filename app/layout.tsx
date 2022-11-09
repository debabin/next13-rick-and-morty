import { TRPCProvider } from '@/src/utils/hooks/trpc';
import { Header } from '@components/layout';

import '../styles/globals.css';

interface RootLayoutProps {
  children: React.ReactElement;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html>
      <head>
        <title>The Rick and Morty</title>
      </head>
      <body>
        <TRPCProvider>
          <Header />
          <div className='container'>{children}</div>
        </TRPCProvider>
      </body>
    </html>
  );
};

export default RootLayout;
