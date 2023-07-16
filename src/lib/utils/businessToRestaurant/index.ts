import type { Business } from '$lib/gql/queries/searchRestaurants';
import type { Restaurant } from '../../../types/restaurant';

export function businessToRestaurant(business: Business): Restaurant {
  return {
    title: business.name,
    imageUrl: business.photos.length ? business.photos[0] : '',
    url: business.url,
    tags: business.categories.map((c) => c.title)
  };
}
