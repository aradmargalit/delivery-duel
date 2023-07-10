<script>
  import '../app.css';
</script>

<main>
  <header class="h-8 w-full border-b-4 border-b-orange-800 bg-blue-200 pl-2">
    <strong>Delivery Duel</strong>
  </header>
  <div class="p-5"><slot /></div>
</main>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.blue.100);
  }
</style>
