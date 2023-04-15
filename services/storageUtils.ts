export function setLocalStorageItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getLocalStorageItem(key: string) {
  return localStorage.getItem(key);
}

export function removeLocalStorageItem(key: string) {
  localStorage.removeItem(key);
}

interface SetCookieParams {
  key: string;
  value: string;
  expirationTime: number;
}

export function setCookie({ key, value, expirationTime }: SetCookieParams) {
  const expirationDate = new Date(expirationTime * 1000);
  const expires = expirationDate.toUTCString();
  const cookieValue = `${key}=${value}; expires=${expires}`;
  document.cookie = cookieValue;
}

export function getCookie(key: string) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieValues = decodedCookie.split(';');

  for (let i = 0; i < cookieValues.length; i += 1) {
    const cookiePair = cookieValues[i].split('=');
    const cookieName = cookiePair[0].trim();

    if (cookieName === key) {
      const cookieValue = cookiePair[1];
      return cookieValue;
    }
  }

  return null;
}

export function removeCookie(key: string) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() - 1);

  const cookieValue = `${key}=; expires=${expirationDate.toUTCString()}`;
  document.cookie = cookieValue;
}
