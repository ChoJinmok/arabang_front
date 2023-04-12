import { useEffect, useCallback } from 'react';

import { useRouter } from 'next/router';

import type { NextPageContext } from 'next';

import { postKakaoToken } from '@/services/api';
import { setLocalStorageItem, setCookie } from '@/services/storageUtils';

interface KakaoProps {
  setAccessToken: (accessToken: string) => void
}

function Kakao({ setAccessToken }: KakaoProps) {
  const router = useRouter();

  const authorizeWithKakao = useCallback(async (authorizeCode: string) => {
    try {
      const {
        accessToken,
        refreshToken,
        expirationTime,
      } = await postKakaoToken(authorizeCode);

      setAccessToken(accessToken);
      setCookie({ key: 'accessToken', value: accessToken, expirationTime });
      setLocalStorageItem('refreshToken', refreshToken);
    } catch (error) {
      // handle the error, e.g. show an error message to the user
    } finally {
      router.push('/');
    }
  }, [setAccessToken, router]);

  useEffect(() => {
    const { search } = window.location;

    if (!search) return;

    const params = new URLSearchParams(search);
    const authorizeCode = params.get('code');

    if (!authorizeCode) return;

    authorizeWithKakao(authorizeCode);
  }, [authorizeWithKakao]);
  return (
    <h1>로그인 중</h1>
  );
}

Kakao.getInitialProps = async (context: NextPageContext) => {
  const { pathname } = context;

  return { pathname };
};

export default Kakao;
