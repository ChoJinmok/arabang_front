import { ReactNode } from 'react';

import type { TokenData } from '@/pages/_app';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  accessToken: string;
  refreshToken: string;
  setTokenData: (tokenData: TokenData) => void
}

export default function Layout({
  children, accessToken, refreshToken, setTokenData,
}: LayoutProps) {
  return (
    <>
      <Header accessToken={accessToken} refreshToken={refreshToken} setTokenData={setTokenData} />
      <main>
        {children}
      </main>
    </>
  );
}
