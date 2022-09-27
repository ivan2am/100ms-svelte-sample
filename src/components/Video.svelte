<script>
    import { hmsActions } from "../utils/Setup100ms";

    export let peer;
    let videoTag = {};
    let audioTag;

    if (peer.videoTrack) {
        hmsActions.attachVideo(peer.videoTrack, videoTag);
    }
</script>

<video autoplay muted playsinline bind:this={videoTag} />
<audio bind:this={audioTag} />
