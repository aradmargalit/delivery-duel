<script>
  import { goto } from '$app/navigation';
  import LocationInput from '$lib/components/LocationInput/index.svelte';

  import { locationState } from '$lib/stores/location';
  import { encodeLocationAsParams } from '$lib/utils/encodeLocationAsParams';
  let locationString = '';

  locationState.subscribe((v) => {
    locationString = encodeLocationAsParams({coordinates: $locationState.coordinates, manualLocation: $locationState.manualLocation}).toString();
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
      <button disabled={!locationString} on:click={() => goto(`/duel?${locationString}`)}>start duel!</button>
    </div>
  </div>
</main>
