import { useEffect, useCallback } from 'react';

import { useRouter } from 'next/router';

import type { NextPageContext } from 'next';

import { postKakaoToken } from '@/services/api';
import { saveItem } from '@/services/storage';

import type { TokenData } from '@/pages/_app';

interface KakaoProps {
  setTokenData: (tokenData: TokenData) => void
}

function Kakao({ setTokenData }: KakaoProps) {
  const router = useRouter();

  const authorizeWithKakao = useCallback(async (authorizeCode: string) => {
    try {
      const user = await postKakaoToken(authorizeCode);

      setTokenData({ accessToken: user.accessToken, refreshToken: user.refreshToken });

      saveItem('accessToken', user.accessToken);
      saveItem('refreshToken', user.refreshToken);
    } catch (error) {
      // handle the error, e.g. show an error message to the user
    } finally {
      router.back();
    }
  }, [setTokenData, router]);

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
