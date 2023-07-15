<script>
  import { goto } from '$app/navigation';
  import LocationInput from '$lib/components/LocationInput/index.svelte';

  import { locationState } from '$lib/stores/location';
  let hasLocation = false;

  locationState.subscribe((v) => {
    hasLocation = Boolean(v.coordinates || v.manualLocation);
  });
</script>

<main>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <h1>Delivery Duel</h1>
    <p>Helps you decide where dinner comes from.</p>
    <div class="mt-5">
      <LocationInput />
    </div>
    <div class="mt-5">
      <button disabled={!hasLocation} on:click={() => goto('/duel')}>start duel!</button>
    </div>
  </div>
</main>
