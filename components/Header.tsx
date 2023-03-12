import { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

import { postKakaoToken } from '@/services/api';

export default function Header() {
  useEffect(() => {
    if (!window.location.search) return;

    const PARAMS = new URL(document.URL).searchParams;
    const AUTHORIZE_CODE = PARAMS.get('code');

    if (!AUTHORIZE_CODE) return;
    postKakaoToken(AUTHORIZE_CODE);
  }, []);

  function receiveKakaoAuthorizationCode() {
    const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST
    }/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`;

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
