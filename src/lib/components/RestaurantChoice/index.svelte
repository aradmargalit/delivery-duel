<script lang="ts">
  import type { Restaurant } from '../../../types/restaurant';
  import RestaurantCard from '../RestaurantCard/index.svelte';
  import { duel } from '$lib/stores/duel';

  export let restaurant: Restaurant;
</script>

<button on:click={() => duel.select(restaurant)} class="">
  <RestaurantCard {restaurant} />
</button>
