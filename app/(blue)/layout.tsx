import React from 'react';

import { Banners } from '@/components';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => (
  <>
    <Banners.BlueBanner />
    {children}
  </>
);

export default DynamicLayout;
