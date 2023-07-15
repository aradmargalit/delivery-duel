import type { PageServerLoad } from './$types';
import { fetchRestaurants } from '$lib/gql/queries/searchRestaurants';
import { redirect } from '@sveltejs/kit';

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

  const restaurants = await fetchRestaurants(searchParams);
  console.log({restaurants})

  return {};
}) satisfies PageServerLoad;
