<script>
    import { selectVideoTrackByPeerID } from "@100mslive/hms-video-store";
    import { hmsActions, hmsStore } from "../utils/Setup100ms";

      export let peer;
      let videoTag = {};
      let audioTag;

      hmsStore.subscribe((track) => {
          if (track) {
          hmsActions.attachVideo(track.id, videoTag);
      }
      }, selectVideoTrackByPeerID(peer.id));

  </script>

  <video autoplay muted playsinline bind:this={videoTag} />
  <audio bind:this={audioTag} />
