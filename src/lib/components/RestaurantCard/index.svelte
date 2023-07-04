<script lang="ts">
	import type { Restaurant } from '../../../types/restaurant';

	export let restaurant: Restaurant;
</script>

<div
	class="min-w-fit flex h-40 w-1/4 items-center justify-center rounded-lg border-4 border-gray-500 bg-gray-200 p-1"
>
	<p>{restaurant.title}</p>
</div>
