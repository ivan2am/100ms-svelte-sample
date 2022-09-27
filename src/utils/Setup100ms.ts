import type {HMSPeer} from "@100mslive/hms-video-store";
import { HMSReactiveStore, selectPeers } from "@100mslive/hms-video-store";

const hms = new HMSReactiveStore();
export const hmsStore = hms.getStore();
export const hmsActions = hms.getActions();

export const join = async (userName: string, authToken: string) => {
    return await hmsActions.join({ userName, authToken });
};

export const leave = () => {
    return hmsActions.leave();
};

export const peers = (): HMSPeer[]  => {
    return hmsStore.getState(selectPeers);
};