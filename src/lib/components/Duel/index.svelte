<script lang="ts">
  import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
  import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';
  import type { Restaurant } from '../../../types/restaurant';

  let first: Restaurant = {imageUrl: '', title: ''}
  let second: Restaurant = {imageUrl: '', title: ''}

  import { duel } from '$lib/stores/duel';
    import { goto } from '$app/navigation';

</script>

<main>
  <div class="flex flex-col items-center justify-center">
    {#if !$duel.winner}
      <p class="mb-5">Choose which looks better...</p>
      <RestaurantChoice restaurant={$duel.first} />
      <p class="mb-5">vs ...</p>
      <RestaurantChoice restaurant={$duel.second} />
    {:else}
      <p>Winner!</p>
      <RestaurantCard restaurant={$duel.winner} />
      <button on:click={() => goto('/')}> Play Again? </button>
    {/if}
    <button on:click={() => goto('/')}>Go Home</button>
  </div>
</main>
