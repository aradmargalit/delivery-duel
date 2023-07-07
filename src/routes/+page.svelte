<script lang="ts">
	import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
	import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';

	import { duel } from '$lib/stores/duel';
</script>

<main>
	<div class="flex flex-col items-center justify-center">
		{#if !$duel.winner}
			<RestaurantChoice restaurant={$duel.first} />
			<RestaurantChoice restaurant={$duel.second} />
		{:else}
			<p>Winner!</p>
			<RestaurantCard restaurant={$duel.winner} />
			<button on:click={duel.reset} class="rounded-lg border-4 border-blue-500 p-4">
				Play Again?
			</button>
		{/if}
	</div>
</main>
