<script lang="ts">
	import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
	import { duel } from '$lib/stores/duel';
</script>

<main>
	<div>
		<RestaurantChoice restaurant={$duel.first} />
		<RestaurantChoice restaurant={$duel.second} />
	</div>
</main>
