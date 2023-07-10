import { removeItem } from "$lib/utils/removeItem/removeItem";
import { selectRandom } from "$lib/utils/selectRandom/selectRandom";
import type { Restaurant } from "../../../../types/restaurant";

export function pickNewDuelists(options: Restaurant[]): {
	first: Restaurant,
	second: Restaurant,
	remaining: Restaurant[]
} {
	let remaining = options;
	const first = selectRandom(remaining);
  // Remove first so it isn't chosen again
	remaining = removeItem(remaining, first);
	const second = selectRandom(remaining);
	// Add back first, since it wasn't chosen yet
	remaining = [...remaining, first];

	return {
		remaining,
		first,
		second
	}
}