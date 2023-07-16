<script>
  import '../app.css';
  import '98.css';
</script>

<main>
  <header class="title-bar">
    <strong class="title-bar-text">Delivery Duel</strong>
  </header>
  <div class="p-5"><slot /></div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.400);
  }
</style>
