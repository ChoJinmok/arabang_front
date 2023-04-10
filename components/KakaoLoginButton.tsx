import { useCallback } from 'react';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button({
  padding: '12px 15px',
  backgroundColor: '#FEE500',
  borderRadius: '12px',

  '& span': {
    color: 'rgba(0, 0, 0, 0.85)',
  },
});

export default function KakaoLoginButton() {
  function receiveKakaoAuthorizationCode() {
    const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST
    }/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_REST_API_KEY
    }&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI
    }&response_type=code`;

    window.location.href = url;
  }

  const onKakaoLoginClick = useCallback(() => {
    receiveKakaoAuthorizationCode();
  }, []);

  return (
    <Button type="button" onClick={onKakaoLoginClick}>
      <FontAwesomeIcon icon={faComment} color="#000000" />
      {' '}
      <span>로그인</span>
    </Button>
  );
}
