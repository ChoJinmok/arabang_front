import { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  accessToken: string;
  refreshToken: string;
}

export default function Layout({
  children, accessToken, refreshToken,
}: LayoutProps) {
  return (
    <>
      <Header accessToken={accessToken} refreshToken={refreshToken} />
      <main>
        {children}
      </main>
    </>
  );
}
