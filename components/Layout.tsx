import { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  refreshToken: string;
}

export default function Layout({
  children, refreshToken,
}: LayoutProps) {
  return (
    <>
      <Header refreshToken={refreshToken} />
      <main>
        {children}
      </main>
    </>
  );
}
