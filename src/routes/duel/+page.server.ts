import type { PageServerLoad } from './$types';
import {
  fetchRestaurants,
  type Business,
  type RestaurantResult
} from '$lib/gql/queries/searchRestaurants';
import { redirect } from '@sveltejs/kit';
import type { Restaurant } from '../../types/restaurant';
import { businessToRestaurant } from '$lib/utils/businessToRestaurant';

function searchParamsAreValid(searchParams: URLSearchParams): boolean {
  if (searchParams.has('manualLocation')) {
    return true;
  }

  if (searchParams.has('lat') && searchParams.has('lon')) {
    return true;
  }

  return false;
}

export const load = (async ({ url }) => {
  const searchParams = url.searchParams;
  if (!searchParamsAreValid(url.searchParams)) {
    // We can't start a duel, go back
    throw redirect(307, '/');
  }

  try {
    const result: RestaurantResult = await fetchRestaurants(searchParams);
    const businesses = result.search.business;
    const restaurants: Restaurant[] = businesses.map(businessToRestaurant);
    return { restaurants };
  } catch (e) {
    console.error((e as Error).message);
    return { restaurants: [] };
  }
}) satisfies PageServerLoad;
