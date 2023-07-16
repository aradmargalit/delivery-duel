<script lang="ts">
  import Duel from '$lib/components/Duel/index.svelte';
    import { duel } from '$lib/stores/duel';
  import type { PageData } from './$types';

    export let data: PageData;
    duel.setNewRestaurants(data.restaurants)
</script>

<Duel />
