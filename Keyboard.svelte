<script lang="ts">
    export let octaves = 2;
    export let middleC = 60;
    export let keysPressed = [];
    export let verbose: boolean;

    const modulo = octaves * 12;

    import Key from "./Key.svelte";

    import { onMount } from "svelte";

    let keys: Array<number>;

    $: keys = [...Array(octaves * 12 + 1).keys()].map(
        (i) => i + (middleC - Math.floor(octaves / 2) * 12)
    );

    let logs = [];

    function noteOn(note: number, velocity: number = 0) {
        logs = [`Note ${note} was pressed!`, ...logs];
    }

    function noteOff(note: number) {
        logs = [`Note ${note} was released!`, ...logs];
    }

    function listInputsAndOutputs( midiAccess: WebMidi.MIDIAccess ) {
        for (const entry of midiAccess.inputs) {
            const input = entry[1];
            console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
            "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
            "' version:'" + input.version + "'" );
        }

        for (const entry of midiAccess.outputs) {
            const output = entry[1];
            console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
            "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
            "' version:'" + output.version + "'" );
        }
    }

    function onMIDIMessage( event: WebMidi.MIDIMessageEvent ) {
        if(verbose) {
            let str = "MIDI message received at timestamp " + event.timeStamp + "[" + event.data.length + " bytes]: ";
            for (let i = 0; i < event.data.length; i++) {
                str += "0x" + event.data[i].toString(16) + " ";
                event.data
            }
            console.log( str );
        }

        const command = event.data[0];
        const key = event.data[1] % modulo;
        const velocity = (event.data.length > 2) ? event.data[2] : 0; // a velocity value might not be included with a noteOff command

        switch (command) {
            case 144: // noteOn
                if (velocity > 0) {
                    keyBindings[key]?.keyPressed(key)
                } else {
                    keyBindings[key]?.keyReleased(key)

                }
                break;
            case 128: // noteOff
                keyBindings[key]?.keyReleased(key)
                break;
        }
    }

    onMount(async () => {
        try {
            let midiAccess = await navigator.requestMIDIAccess()
            console.log( "MIDI ready!" );
            if (verbose) listInputsAndOutputs(midiAccess);
            midiAccess.inputs.forEach( (entry) => {entry.onmidimessage = onMIDIMessage;});
        }
        catch(err) {
            console.log( "Failed to get MIDI access - " + err );
        }
    });

    let keyBindings = {};
</script>

<div class="keyboard">
    <div>
        {#each keys as note}
            <Key noteNum={note}
                on:noteon={({detail}) => noteOn(detail)}
                on:noteoff={({detail}) => noteOff(detail)}
                pressed={keysPressed.includes(note)}
                bind:this={keyBindings[note % modulo]}
            />
        {/each}
    </div>
</div>

{#if verbose}
    {#each logs as log}
        <div>{log}</div>
    {/each}
{/if}


<style>
    .keyboard {
        display: flex;
        justify-content: center;
    }
    .keyboard > div {
        display: flex;
        overflow: auto;
        padding: 8px;
        height: 192px;
    }
</style>
