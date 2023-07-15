import type { PageServerLoad } from './$types';
import { fetchRestaurants } from '$lib/gql/queries/searchRestaurants';

export const load = (async ({ params }) => {
  const restaurants = await fetchRestaurants();

  return {
    restaurants
  };
}) satisfies PageServerLoad;

// export const actions = {
// 	default: async ({ request, cookies }) => {
// 		const data = await request.formData();

// 		if (data.get('passphrase') === 'TODO') {
// 			cookies.set('allowed', 'true', {
// 				path: '/'
// 			});

// 			throw redirect(303, '/welcome');
// 		}

// 		return fail(403, {
// 			incorrect: true
// 		});
// 	}
// };
