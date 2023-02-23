import '../styles/tailwind.css';

import { Global } from '@emotion/react';

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import globals from '../styles/globals';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Global styles={globals} />
      <Component {...pageProps} />
    </Layout>
  );
}
