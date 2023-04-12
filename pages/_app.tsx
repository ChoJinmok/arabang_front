import '../styles/tailwind.css';

import { useState, useEffect, useCallback } from 'react';

import { Global } from '@emotion/react';

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import { getCookie } from '@/services/storageUtils';

import { config } from '@fortawesome/fontawesome-svg-core';
import globals from '../styles/globals';

import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = pageProps;

  const [state, setState] = useState({
    accessToken: '',
  });

  const setAccessToken = useCallback((accessToken: string) => {
    setState((prevState) => ({
      ...prevState,
      accessToken,
    }));
  }, [setState]);

  useEffect(() => {
    const accessToken = getCookie('accessToken');

    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [setAccessToken]);

  const { accessToken } = state;

  if (pathname === '/oauth/kakao') {
    return (
      <>
        <Global styles={globals} />
        <Component {...pageProps} setAccessToken={setAccessToken} />
      </>
    );
  }

  return (
    <Layout accessToken={accessToken}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </Layout>
  );
}
