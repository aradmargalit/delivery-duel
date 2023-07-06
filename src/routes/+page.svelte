<script lang="ts">
	import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';
	import type { Restaurant } from '../types/restaurant';

	const restaurants: Restaurant[] = [
		{
			title: 'Thai Fix',
			imageUrl:
				'https://static-content.owner.com/brands/funnel/hero-background-images/teuDydnBHKyWhSCc4b5kuQBq.png?v=7370490082&w=3840&q=80&auto=format'
		}
	];
</script>

<main>
	{#each restaurants as restaurant}
		<RestaurantCard {restaurant} />
	{/each}
</main>
