<script lang="ts">
  import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
  import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';

  import { duel } from '$lib/stores/duel';
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
      <button on:click={duel.reset} class="">
        Play Again?
      </button>
    {/if}
  </div>
</main>
