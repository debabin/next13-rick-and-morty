import React from 'react';

import { Banners } from '@/components';

interface BlueBannerLayoutProps {
  children: React.ReactNode;
}

const BlueBannerLayout = ({ children }: BlueBannerLayoutProps) => (
  <>
    <Banners.BlueBanner />
    {children}
  </>
);

export default BlueBannerLayout;
