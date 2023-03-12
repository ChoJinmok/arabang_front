export function saveItem(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function loadItem(key: string) {
  return localStorage.getItem(key);
}

export function deleteItem(key: string) {
  localStorage.removeItem(key);
}
