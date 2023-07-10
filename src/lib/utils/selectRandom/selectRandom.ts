export function selectRandom<T>(items: T[]) {
  const len = items.length;
  const randomIndex = Math.floor((Math.random() * 100) % len);
  return items[randomIndex];
}
