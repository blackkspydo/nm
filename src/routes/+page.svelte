<script lang="ts">
	// @ts-ignore
	let equation: string = '';
</script>

<input
	type="text"
	bind:value={equation}
	placeholder="Enter equation"
	class="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
/>
