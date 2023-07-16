<script>
  import { goto } from '$app/navigation';
  import LocationInput from '$lib/components/LocationInput/index.svelte';
  import { SEARCH_RADIUS_MILES_MAX } from '$lib/config/searchConfig';

  import { locationState } from '$lib/stores/location';
  import { encodeLocationAsParams } from '$lib/utils/encodeLocationAsParams';
  let locationString = '';

  locationState.subscribe((v) => {
    locationString = encodeLocationAsParams({
      coordinates: $locationState.coordinates,
      manualLocation: $locationState.manualLocation
    }).toString();
  });

  let searchRadiusMiles = SEARCH_RADIUS_MILES_MAX;
</script>

<main>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <h1 style="font-size: 3rem">Delivery Duel</h1>
    <p>Helps you decide where dinner comes from.</p>
    <div class="mt-5 w-full md:w-1/4">
      <fieldset>
        <LocationInput />
        <div class="field-row">
          <label for="searchRadius">Search Radius</label>
          <input
            id="searchRadius"
            type="range"
            min={1}
            max={SEARCH_RADIUS_MILES_MAX}
            bind:value={searchRadiusMiles}
          />
          <p>{searchRadiusMiles} {searchRadiusMiles > 1 ? 'miles' : 'mile'}</p>
        </div>
      </fieldset>
    </div>

    <div class="mt-5">
      <button
        disabled={!locationString}
        on:click={() => goto(`/duel?${locationString}&radius=${searchRadiusMiles}`)}
        >start duel!</button
      >
    </div>
  </div>
</main>
