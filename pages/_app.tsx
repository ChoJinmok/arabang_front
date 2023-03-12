import '../styles/tailwind.css';

import { useState, useEffect, useCallback } from 'react';

import { Global } from '@emotion/react';

import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import { loadItem } from '@/services/storage';
import { postToken } from '@/services/api';

import globals from '../styles/globals';

export interface TokenData {
  accessToken: string;
  refreshToken: string;
}

type TokenName = 'accessToken' | 'refreshToken';

export default function App({ Component, pageProps }: AppProps) {
  const [state, setState] = useState({
    accessToken: '',
    refreshToken: '',
  });

  const setTokenData = useCallback(({ accessToken, refreshToken }: TokenData) => {
    setState((prevState) => ({
      ...prevState,
      accessToken,
      refreshToken,
    }));
  }, [setState]);

  const updateTokens = useCallback(async (tokenName: TokenName) => {
    const token = loadItem(tokenName);

    if (!token) return false;

    const user = await postToken({ tokenName, token });

    if (!user) return false;

    const { accessToken, refreshToken } = user;

    setTokenData({ accessToken, refreshToken });

    return true;
  }, [setTokenData]);

  useEffect(() => {
    const checkAndUpdateTokens = async () => {
      const isValidAccessToken = await updateTokens('accessToken');

      if (isValidAccessToken) return;

      updateTokens('refreshToken');
    };

    checkAndUpdateTokens();
  }, [updateTokens]);

  const { accessToken, refreshToken } = state;

  return (
    <Layout accessToken={accessToken} refreshToken={refreshToken} setTokenData={setTokenData}>
      <Global styles={globals} />
      <Component {...pageProps} />
    </Layout>
  );
}
