import {SET_HUB_STATUS, SET_HUBS} from "../actions/hubs";

export const Hubs = (state = [], action) => {
    switch (action.type) {
        case SET_HUBS:
            return action.payload;
        case SET_HUB_STATUS:
            return state.map(hub => {
                if (action.payload.hub.id === hub.id) {
                    hub.status = action.payload.status;
                    return hub;
                }
                return hub;
            })
    }
    return state;
};
