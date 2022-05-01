<script lang="ts">
    import Keyboard from "./Keyboard.svelte";
    import Settings from "./Settings.svelte";
    import { octaves, verbose } from "./stores";
</script>



<svelte:head>
    <title>Svelte Piano</title>
</svelte:head>

<div class="nav">
    <h1><a href="https://github.com/oscarhermoso/svelte-piano">Svelte Piano</a></h1>
    <Settings/>
</div>

{#key $octaves}
    <Keyboard octaves={$octaves} verbose={$verbose}/>
{/key}

<style>
    .nav {
        display:flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
