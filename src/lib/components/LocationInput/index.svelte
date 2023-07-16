<script>
  import { browser } from '$app/environment';
  import { locationState } from '$lib/stores/location';

  let locationError = '';
  let coordinateState = 'determining your location...';

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
          coordinateState = '';
        },
        (positionError) => {
          locationError = positionError.message;
        }
      );
    }
  }
</script>

<div class="flex flex-col">
  <p class="mt-5">{coordinateState}</p>
  <div class="field-row">
    <label for="locationInput">Enter your location</label>
    <input
      bind:value={$locationState.manualLocation}
      id="locationInput"
      type="text"
      placeholder="Irvine, CA"
    />
  </div>
  {#if locationError}
    <p class="mt-5 text-red-500">Could not find your location: {locationError}</p>
  {/if}
</div>
