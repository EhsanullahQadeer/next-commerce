'use client';

import { FC, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/lib/utils';
import { selectSidebarToggle } from '@/store/slice';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const isSidebarToggle = useSelector(selectSidebarToggle);

  return (
    <div
      className={cn(
        'flex bg-white min-h-screen flex-col',
        isSidebarToggle && 'translate-x-[200px] lg:translate-x-0'
      )}
      style={{ transition: 'all 0.4s ease' }}
    >
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
