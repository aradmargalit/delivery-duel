import { pickNewDuelists } from '.';
import { describe, expect, it } from 'vitest';
import { makeNRestaurants } from '../../../../testUtils/makeRestaurant';
import type { Restaurant } from '../../../../types/restaurant';

describe(pickNewDuelists, () => {
	const restaurants: Restaurant[] = makeNRestaurants(50);

	it('retains the length of the options list', () => {
		expect(pickNewDuelists(restaurants).remaining.length).toBe(restaurants.length);
	});

	it('picks different options after 100 iterations', () => {
		for (let i = 0; i < 100; i++) {
			const { first, second } = pickNewDuelists(restaurants);
			expect(first.title).not.toEqual(second.title);
		}
	});
});
