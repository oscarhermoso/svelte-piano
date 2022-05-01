<script>
	import Modal from './Modal.svelte';
  import { octaves, verbose } from "./stores";

	let showModal = false;
</script>

<button on:click="{() => showModal = true}" display="inline-block;">
  ⚙️ Settings
</button>

{#if showModal}
<Modal on:close="{() => showModal = false}">
    <slot name="header"><h1>Settings</h1></slot>
      <h2>Octaves</h2>
      <label>
          <input type=radio bind:group={$octaves} name="octaves" value={1}>
          One
      </label>

      <label>
          <input type=radio bind:group={$octaves} name="octaves" value={2}>
          Two
      </label>

      <label>
          <input type=radio bind:group={$octaves} name="octaves" value={3}>
          Three
      </label>

      <h2>Debug</h2>
      <label>Enable logging:
          <input bind:checked={$verbose} type="checkbox">
      </label>
</Modal>
{/if}

