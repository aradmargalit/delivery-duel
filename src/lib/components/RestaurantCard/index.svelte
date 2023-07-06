<script lang="ts">
	import type { Restaurant } from '../../../types/restaurant';

	export let restaurant: Restaurant;
	const { imageUrl: src, title, cuisine } = restaurant;
</script>

<div
	class="flex h-48 w-full transform flex-col items-center justify-center rounded-lg border-4 border-blue-500 bg-gray-200 transition hover:scale-110 hover:opacity-80 motion-reduce:transition-none motion-reduce:hover:transform-none md:w-1/4"
>
	<img {src} alt="restaurant" class="w-full overflow-hidden rounded object-cover" />
	<div class="flex h-24 flex-col items-center justify-center">
		<h1 class="font-bold">{title}</h1>
		<p><em>{cuisine}</em></p>
	</div>
</div>
