import {SET_HUBS} from "../actions/hubs";

export const HubsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_HUBS:
            return action.payload;
        default:
            return state;
    }
};
