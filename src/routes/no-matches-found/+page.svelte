<script lang="ts">
  import { goto } from '$app/navigation';
</script>

<main class="flex flex-col items-center justify-center">
  <h1 class="text-red-500">No matches possible</h1>
  <p>Try setting your search radius larger or setting a different location</p>
  <p>
    If the issue persists, please submit an issue on <a
      href="https://github.com/aradmargalit/delivery-duel/issues">GitHub</a
    >
  </p>
  <button on:click={() => goto('/')}>Go Home</button>
</main>
