async function fetchKakaoToken(authorizeCode: string) {
  const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST}/oauth/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&code=${authorizeCode}`,
  });
  const { access_token: accessToken, refresh_token: refreshToken } = await response.json();

  return {
    accessToken,
    refreshToken,
  };
}

export async function postKakaoToken(authorizeCode: string) {
  const { accessToken, refreshToken } = await fetchKakaoToken(authorizeCode);
  const url = '';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ accessToken, refreshToken }),
  });

  const user = await response.json();

  console.log(user);

  return user;
}

export async function postToken({ tokenName, token }: { tokenName: string, token: string }) {
  const url = '';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ [tokenName]: token }),
  });

  const user = await response.json();

  console.log(user);

  return user;
}
