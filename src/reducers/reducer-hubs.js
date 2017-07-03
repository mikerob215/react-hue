import {SET_HUB_STATUS, SET_HUBS} from "../actions/hubs";

export const Hubs = (state = [], action) => {
    switch (action.type) {
        case SET_HUBS:
            return action.payload;
        case SET_HUB_STATUS:
            const hubs = Object.assign([], state);
            console.log(action);
            console.log(hubs);
            return hubs.map(hub => {
                if (action.payload.hub.id === hub.id) {
                    console.log(hub);
                    hub.status = action.payload.status;
                    return hub;
                }
                return hub;
            })
    }
    return state;
};