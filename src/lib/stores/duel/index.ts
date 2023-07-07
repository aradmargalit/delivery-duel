import { writable } from 'svelte/store';
import type { Restaurant } from '../../../types/restaurant';
import { getRestaurantOptions } from '$lib/config/restaurantOptions';
import { selectRandom } from '$lib/utils/selectRandom/selectRandom';
import { removeItem } from '$lib/utils/removeItem/removeItem';

export type DuelState = {
	all: Restaurant[];
	remaining: Restaurant[];
	first: Restaurant;
	second: Restaurant;
	winner: Restaurant | null;
};

function createDuel() {
	const restaurantOptions = getRestaurantOptions();
	const all = [...restaurantOptions];
	let remaining = [...restaurantOptions];

	// TODO: DRY
	const first = selectRandom(remaining);
	remaining = removeItem(remaining, first);
	const second = selectRandom(remaining);
	// Add back first, since it wasn't chosen yet
	remaining = [...remaining, first];

	const initialState: DuelState = {
		all,
		remaining,
		first,
		second,
		winner: null
	};

	const { subscribe, update, set } = writable(initialState);

	function selectRestaurant(selected: Restaurant) {
		update((state) => {
			// if the first option was selected, remove the second and vice versa
			const toRemove = selected.title === state.first.title ? state.second : state.first;
			let remaining = removeItem(state.remaining, toRemove);

			// pick a new first and second
			const first = selectRandom(remaining);
			remaining = removeItem(remaining, first);
			const second = selectRandom(remaining);
			// Add back first, since it wasn't chosen yet
			remaining = [...remaining, first];

			// if remaining is less than 2, the game is over
			if (remaining.length === 1) {
				return {
					...state,
					winner: remaining[0]
				};
			}

			return {
				...state,
				remaining,
				first,
				second
			};
		});
	}

	return {
		subscribe,
		select: (selected: Restaurant) => {
			return selectRestaurant(selected);
		},
		reset: () => set(initialState)
	};
}

export const duel = createDuel();
