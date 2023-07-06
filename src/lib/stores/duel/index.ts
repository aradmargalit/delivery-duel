import { writable } from 'svelte/store';
import type { Restaurant } from '../../../types/restaurant';
import { getRestaurantOptions } from '$lib/config/restuarantOptions';

type DuelState = {
	all: Restaurant[];
	remaining: Restaurant[];
	first?: Restaurant;
	second?: Restaurant;
};

const restaurantOptions = getRestaurantOptions();

export const duel = writable<DuelState>({
	all: restaurantOptions,
	remaining: restaurantOptions
});
