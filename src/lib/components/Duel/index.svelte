<script lang="ts">
  import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
  import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';

  import { duel } from '$lib/stores/duel';
  import SwordIcon from './SwordIcon.svelte';
  import ImmutableProgress from './ImmutableProgress.svelte';
</script>

<main>
  <div class="flex flex-col items-center justify-center">
    {#if !$duel.winner}
      <p class="mb-5">Choose which looks better...</p>
      <RestaurantChoice restaurant={$duel.first} />
      <SwordIcon />
      <RestaurantChoice restaurant={$duel.second} />
      <ImmutableProgress />
    {:else}
      <p>Winner!</p>
      <RestaurantCard restaurant={$duel.winner} />
    {/if}
    <a href="/">Go Home</a>
  </div>
</main>
