<script lang="ts">
  import type { Restaurant } from '../../../types/restaurant';

  export let restaurant: Restaurant;
</script>

<div class="window mb-5 flex h-48 flex-col items-center justify-center md:w-[30rem]">
  <div class="title-bar w-full">
    <p class="title-bar-text">{restaurant.title}</p>
    <div class="title-bar-controls">
      <button
        aria-label="Site"
        on:click|stopPropagation={() => window.open(restaurant.url, '_blank')}
      >
        Website
      </button>
      <button disabled aria-label="Close" />
    </div>
  </div>
  <img src={restaurant.imageUrl} alt="restaurant" class="w-full overflow-hidden object-cover" />
  <div class="flex flex-col items-center justify-center">
    <p><em>{restaurant.tags.join(', ')}</em></p>
    <p class="mt-1">{restaurant.location}</p>
  </div>
</div>
