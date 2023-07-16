import { writable } from 'svelte/store';
import type { Restaurant } from '../../../types/restaurant';
import { removeItem } from '$lib/utils/removeItem/removeItem';
import { pickNewDuelists } from './pickNewDuelists';

export type DuelState = {
  all: Restaurant[];
  remaining: Restaurant[];
  first: Restaurant;
  second: Restaurant;
  winner: Restaurant | null;
};

function createDuel() {
  const initialState: DuelState = {
    all: [],
    remaining: [],
    first: {imageUrl: '', title: ''},
    second: {imageUrl: '', title: ''},
    winner: null
  };

  const { subscribe, update, set } = writable(initialState);

  function setNewRestaurants(restauarants: Restaurant[]) {
    const { first, second, remaining } = pickNewDuelists(restauarants);
    set({
      all: restauarants,
      remaining,
      first,
      second,
      winner: null
    });
  }

  function selectRestaurant(selected: Restaurant) {
    update((state) => {
      // if the first option was selected, remove the second and vice versa
      const toRemove = selected.title === state.first.title ? state.second : state.first;
      let remaining = removeItem(state.remaining, toRemove);

      // pick a new first and second
      const { first, second, remaining: newRemaining } = pickNewDuelists(remaining);
      remaining = newRemaining;

      // if remaining is 1, the game is over
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
    reset: () => set(initialState),
    setNewRestaurants
  };
}

export const duel = createDuel();
