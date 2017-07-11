import {SET_HUB_STATUS, SET_HUBS} from "../actions/hubs";

export const HubsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_HUBS:
            return action.payload;
        case SET_HUB_STATUS:
            return action.payload;
    }
    return state;
};
