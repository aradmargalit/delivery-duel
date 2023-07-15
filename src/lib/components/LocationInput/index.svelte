<script>
  import { browser } from '$app/environment';
  import { locationState } from '$lib/stores/location';

  let locationError = '';

  // Determine if we can get the user location from the browser
  // Only safe on client
  if (browser) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          locationState.setCoordinates({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (positionError) => {
          locationError = positionError.message;
        }
      );
    }
  }
</script>

<div class="flex flex-col">
  <div class="field-row">
    <label for="locationInput">Your location</label>
    <input bind:value={$locationState.manualLocation} id="locationInput" type="text" />
  </div>
  {#if locationError}
    <p class="text-red-500 mt-5">Could not find your location: {locationError}</p>
  {/if}
  {#if $locationState.coordinates}
    <p>{JSON.stringify($locationState.coordinates)}</p>
  {/if}
</div>
