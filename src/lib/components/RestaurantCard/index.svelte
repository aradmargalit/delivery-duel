<script lang="ts">
	import type { Restaurant } from '../../../types/restaurant';

	export let restaurant: Restaurant;
	const { imageUrl: src, title } = restaurant;
</script>

<div
	class="flex h-48 w-full flex-col items-center justify-center rounded-lg border-4 border-gray-500 bg-gray-200 md:w-1/4"
>
	<img {src} alt="restaurant" class="w-full overflow-hidden object-cover" />
	<div class="flex h-24 items-center justify-center">
		<h1 class="font-bold">{title}</h1>
	</div>
</div>
