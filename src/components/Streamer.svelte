<script>
    import { join, leave, peers, hmsStore, hmsActions } from "../utils/Setup100ms";
    import Video from "./Video.svelte";

    let userName = null;
    let authToken = null;

    const joinRoom = async () => {
        await join(userName, authToken);
    };

    const leaveRoom = async () => {
        await leave();
    };

    let msPeers = peers();
    const peerTracking = new Set();

    window.peersCall = peers;

    hmsStore.subscribe((el) => {
        msPeers = peers();
        window.mspeers = msPeers;
        console.log('Peers: ', msPeers);
        console.log('EL: ', el);

        // msPeers.forEach(p => hmsActions.attachVideo(p.id, p));
    });

</script>

<form id="join">
    <h2>Join Room</h2>
    <div class="input-container">
        <input id="name" type="text" name="username" placeholder="Your name" bind:value="{userName}" />
    </div>
    <div class="input-container">
        <input id="token" type="text" name="token" placeholder="Auth token" bind:value="{authToken}" />
    </div>
    <button type="button" class="btn-primary" id="join-btn" on:click="{() => joinRoom()}">Join</button>
</form>
<button on:click="{() => leaveRoom()}">Leave</button>

<div>

    {#if msPeers && msPeers.length > 0}
        {#each msPeers as msPeer (msPeer.id) }
            <div class="video-container">
                <Video peer={msPeer}></Video>
            </div>
        {/each}
    {/if}



</div>

<svelte:window on:close ={() => leaveRoom()}></svelte:window>