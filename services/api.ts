async function fetchKakaoToken(AUTHORIZE_CODE: string) {
  const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST}/oauth/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
  });
  const { access_token: accessToken, refresh_token: refreshToken } = await response.json();

  return {
    accessToken,
    refreshToken,
  };
}

// eslint-disable-next-line import/prefer-default-export
export async function postKakaoToken(AUTHORIZE_CODE: string) {
  const { accessToken, refreshToken } = await fetchKakaoToken(AUTHORIZE_CODE);
  const url = '';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ accessToken, refreshToken }),
  });

  const data = await response.json();

  console.log(data);
}
