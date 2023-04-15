import { ReactNode } from 'react';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  accessToken: string;
}

export default function Layout({
  children, accessToken,
}: LayoutProps) {
  return (
    <>
      <Header accessToken={accessToken} />
      <main>
        {children}
      </main>
    </>
  );
}
