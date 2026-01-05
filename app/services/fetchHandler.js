export const BASE_URL = 'https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw';

export async function getData() {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}