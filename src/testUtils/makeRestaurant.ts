import type { Restaurant } from '../types/restaurant';

export function makeRestaurant(partial?: Partial<Restaurant>): Restaurant {
  return {
    cuisine: 'Thai',
    imageUrl: 'foo.bar',
    title: 'Thai Fix',
    ...partial
  };
}

export function makeNRestaurants(n: number): Restaurant[] {
  return [...new Array(n)].map((x, i) => makeRestaurant({ title: `Thai Fix ${i + 1}` }));
}
