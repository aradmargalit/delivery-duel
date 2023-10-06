<script>
  import '98.css';
  import '../app.css';
</script>

<main>
  <header class="title-bar">
    <strong class="title-bar-text">Delivery Duel</strong>
    <div class="title-bar-controls">
      <button
        aria-label="GitHub"
        on:click={() => window.open('https://github.com/aradmargalit/delivery-duel', '_blank')}
        >GitHub</button
      >
      <button aria-label="Maximize" on:click={() => document.documentElement.requestFullscreen()} />
    </div>
  </header>
  <div class="p-5"><slot /></div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.300);
  }
</style>
