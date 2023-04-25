async function fetchKakaoToken(authorizeCode: string) {
  const url = `${process.env.NEXT_PUBLIC_KAKAO_HOST}/oauth/token`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    },
    body: `grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&code=${authorizeCode}`,
  });
  const {
    access_token: accessToken,
    refresh_token: refreshToken,
  } = await response.json();

  return {
    accessToken,
    refreshToken,
  };
}

async function fetchData(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function postKakaoToken(authorizeCode: string) {
  const { accessToken, refreshToken } = await fetchKakaoToken(authorizeCode);
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/users`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ type: 'kakao', accessToken, refreshToken }),
  });

  const user = await response.json();

  return user;
}

interface Information {
  _id: number;
  link: string;
  name: string;
  price: string;
  thumbnail: string;
}

interface Category {
  _id: number;
  title: string;
}

interface Site {
  _id: number;
  category: Category;
  site: Information
}

interface SiteCategoryKeyword {
  _id: number;
  keyword: string;
  siteCategoryKeyword: Site[];
}

export async function getSitesByKeyword(): Promise<SiteCategoryKeyword[]> {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/keywords`;
  const sitesByKeyword = await fetchData(url);
  return sitesByKeyword;
}

interface SiteCategoryKeyword {
  _id: number;
  site: Information;
}

interface SitesByCategory {
  _id: number;
  title: string;
  siteCategoryKeyword: SiteCategoryKeyword[];
}

export async function getSitesByCategory(category: string): Promise<SitesByCategory> {
  const url = `${process.env.NEXT_PUBLIC_API_HOST}/categories/${category}`;
  const sites = await fetchData(url);
  return sites;
}
