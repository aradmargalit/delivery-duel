<script lang="ts">
	import type { Restaurant } from '../../../types/restaurant';

	export let restaurant: Restaurant;
</script>

<div
	class="mb-5 flex h-48 w-96 flex-col items-center justify-center rounded-lg border-4 border-blue-500 bg-gray-200 transition hover:scale-110 hover:opacity-80 motion-reduce:transition-none motion-reduce:hover:transform-none"
>
	<img
		src={restaurant.imageUrl}
		alt="restaurant"
		class="w-full overflow-hidden rounded object-cover"
	/>
	<div class="flex h-24 flex-col items-center justify-center">
		<h1 class="font-bold">{restaurant.title}</h1>
		<p><em>{restaurant.cuisine}</em></p>
	</div>
</div>
