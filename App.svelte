<script lang="ts">
    import Keyboard from "./Keyboard.svelte";

    let octaves = 3;
    let verbose = false;
</script>

<svelte:head>
    <title>Svelte Piano</title>
</svelte:head>

<label>Octaves:
    <select bind:value={octaves}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
    </select>
</label>

<label>Verbose:
    <input bind:checked={verbose} type="checkbox">
</label>

{#key octaves}
    <Keyboard {octaves} {verbose}/>
{/key}
