<script lang="ts">
    import { writable } from 'svelte/store';
    
    export let count = writable(0);
    export let increment = () => count.update(n => n + 1);
    export let decrement = () => count.update(n => n - 1);
</script>

<h1>Counter: {$count}</h1>
<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>