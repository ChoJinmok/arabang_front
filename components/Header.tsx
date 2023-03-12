import { useEffect, useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { postKakaoToken } from '@/services/api';
import { saveItem } from '@/services/storage';

import type { TokenData } from '@/pages/_app';

interface HeaderProps {
  accessToken: string;
  refreshToken: string;
  setTokenData: (tokenData: TokenData) => void
}

export default function Header({ accessToken, refreshToken, setTokenData }: HeaderProps) {
  const authorizeWithKakao = useCallback(async (authorizeCode: string) => {
    try {
      const user = await postKakaoToken(authorizeCode);
      saveItem('accessToken', user.accessToken);
      saveItem('refreshToken', user.refreshToken);
      setTokenData({ accessToken: user.accessToken, refreshToken: user.refreshToken });
    } catch (error) {
      console.error(error);
      // handle the error, e.g. show an error message to the user
    }
  }, [setTokenData]);

  useEffect(() => {
    const { search } = window.location;

    if (!search) return;

    const params = new URLSearchParams(search);
    const authorizeCode = params.get('code');

    if (!authorizeCode) return;

    authorizeWithKakao(authorizeCode);
  }, [authorizeWithKakao]);

  function receiveKakaoAuthorizationCode() {
    const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST
    }/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY
    }&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI
    }&response_type=code`;

    window.location.href = url;
  }

  function handleKakaoLoginClick() {
    receiveKakaoAuthorizationCode();
  }

  return (
    <div>
      <button type="button" onClick={handleKakaoLoginClick}>
        <FontAwesomeIcon
          icon={faComment}
          aria-hidden="true"
          data-testid="comment-icon"
        />
        {' '}
        <span>카카오 로그인</span>
      </button>
    </div>
  );
}
