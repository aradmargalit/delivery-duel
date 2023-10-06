import type { PageServerLoad } from './$types';
import { fetchRestaurants, type Business } from '$lib/gql/queries/searchRestaurants';
import { redirect } from '@sveltejs/kit';
import type { Restaurant } from '../../types/restaurant';
import { businessToRestaurant } from '$lib/utils/businessToRestaurant';
import { searchParamsAreValid } from './searchParamsAreValid';

export const load = (async ({ url }) => {
  const searchParams = url.searchParams;
  if (!searchParamsAreValid(url.searchParams)) {
    // We can't start a duel, go back
    throw redirect(307, '/');
  }

  try {
    const result = await fetchRestaurants(searchParams);
    const businesses: Business[] =
      result?.search?.business?.filter((x): x is Business => Boolean(x)) ?? [];
    const restaurants: Restaurant[] = businesses.map(businessToRestaurant);

    if (restaurants.length < 2) {
      // can't proceed with fewer than two options
      throw new NoMatchesException();
    }
    return { restaurants };
  } catch (e) {
    if (e instanceof NoMatchesException) {
      // cannot throw redirect in a try block or it gets caught
      throw redirect(307, '/no-matches-found');
    }

    // temporarily fall back to no matches found if error
    throw redirect(307, '/no-matches-found');
    console.error((e as Error).message);
    return { restaurants: [] };
  }
}) satisfies PageServerLoad;

class NoMatchesException extends Error {
  constructor(message?: string) {
    super(message);
    console.error('no matches found');
  }
}
