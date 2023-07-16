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
          coordinateState = '';
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
  {:else if $locationState.coordinates}
    <p class="mt-5 text-green-800">
      Using your coordinates.<br />You can override with a manual location above.
    </p>
  {/if}
</div>
