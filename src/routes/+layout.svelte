<script>
	import '../app.css';
</script>

<main class="p-5">
	<slot />
</main>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.blue.100);
	}
</style>
