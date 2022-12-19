import React from 'react';

import { Banners } from '@/components';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => (
  <>
    <Banners.DynamicBanner />
    {children}
  </>
);

export default DynamicLayout;
