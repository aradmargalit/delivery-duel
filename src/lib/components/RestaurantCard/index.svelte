<script lang="ts">
  import type { Restaurant } from '../../../types/restaurant';

  export let restaurant: Restaurant;
</script>

<div class="window mb-5 flex h-48 w-96 flex-col items-center justify-center">
  <div class="title-bar w-full">
    <p class="title-bar-text">{restaurant.title}</p>
    <div class="title-bar-controls">
      <button disabled aria-label="Minimize" />
      <button disabled aria-label="Maximize" />
      <button disabled aria-label="Close" />
    </div>
  </div>
  <img src={restaurant.imageUrl} alt="restaurant" class="w-full overflow-hidden object-cover" />
</div>
