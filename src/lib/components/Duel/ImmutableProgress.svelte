<script lang="ts">
  import { duel } from '$lib/stores/duel';
  $: progress = ($duel.all.length - $duel.remaining.length) / ($duel.all.length - 1);
</script>

<div class="progress-indicator segmented w-96">
  <span class="progress-indicator-bar" style={`width: ${progress * 100}%;`} />
</div>
