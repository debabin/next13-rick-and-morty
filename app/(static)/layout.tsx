import React from 'react';

import { Banners } from '@/components';

import styles from './layout.module.scss';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => (
  <>
    <Banners.StaticBanner />
    {children}
  </>
);

export default DynamicLayout;
