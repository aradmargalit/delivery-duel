import type { PageServerLoad } from './$types';
import {
  fetchRestaurants,
  type Business,
  type RestaurantResult
} from '$lib/gql/queries/searchRestaurants';
import { redirect } from '@sveltejs/kit';
import type { Restaurant } from '../../types/restaurant';

export const load = (async ({ url }) => {
  const searchParams = url.searchParams;
  if (
    !searchParams ||
    (!searchParams.has('manualLocation') && (!searchParams.has('lat') || !searchParams.has('lon')))
  ) {
    // We can't start a duel, go back
    console.log('redirecting...');
    throw redirect(307, '/');
  }

  const result: RestaurantResult = await fetchRestaurants(searchParams);
  const businesses = result.search.business;
  const restaurants: Restaurant[] = businesses.map(businessToRestaurant);

  return { restaurants };
}) satisfies PageServerLoad;

function businessToRestaurant(business: Business): Restaurant {
  return {
    title: business.name,
    imageUrl: business.photos.length ? business.photos[0] : ''
  };
}
