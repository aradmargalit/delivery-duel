<script lang="ts">
	import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';
	import { duel } from '$lib/stores/duel';
	import type { Restaurant } from '../types/restaurant';

	let remaining: Restaurant[];

	duel.subscribe((value) => {
		remaining = value.remaining;
	});
</script>

<main>
	{#each remaining as restaurant}
		<RestaurantCard {restaurant} />
	{/each}
</main>
