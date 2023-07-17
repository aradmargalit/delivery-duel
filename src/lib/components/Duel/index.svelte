<script lang="ts">
  import RestaurantChoice from '$lib/components/RestaurantChoice/index.svelte';
  import RestaurantCard from '$lib/components/RestaurantCard/index.svelte';

  import { duel } from '$lib/stores/duel';
  import { goto } from '$app/navigation';

  $: progress = $duel.all.length - $duel.remaining.length + 1;
</script>

<main>
  <div class="flex flex-col items-center justify-center">
    {#if !$duel.winner}
      <p class="mb-5">Choose which looks better...</p>
      <RestaurantChoice restaurant={$duel.first} />
      <p class="mb-5">vs ...</p>
      <RestaurantChoice restaurant={$duel.second} />
      <div class="field-row mb-5 mt-5">
        <label for="progress">Progress<br /> ({progress} / {$duel.all.length})</label>
        <input
          id="progress"
          disabled
          type="range"
          min={0}
          max={$duel.all.length}
          value={progress}
        />
      </div>
    {:else}
      <p>Winner!</p>
      <RestaurantCard restaurant={$duel.winner} />
    {/if}
    <a href="/">Go Home</a>
  </div>
</main>
