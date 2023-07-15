import { writable } from 'svelte/store';
import type { Coordinate } from '../../../types/coordinate';

export type LocationState = {
  /**
   * User-entered location, e.g. "San Francisco" or "New York"
   */
  manualLocation?: string;
  /**
   * Coordinates of the user, determined via the browser API
   */
  coordinates?: Coordinate;
};

function createLocationState() {
  const manualLocation = '';
  const initialState: LocationState = {
    manualLocation
  };

  const { subscribe, set, update } = writable(initialState);

  function setCoordinates(coordinates: Coordinate) {
    update((curr) => ({
      ...curr,
      coordinates
    }));
  }

  return {
    subscribe,
    set,
    setCoordinates,
    reset: () => set(initialState)
  };
}

export const locationState = createLocationState();
