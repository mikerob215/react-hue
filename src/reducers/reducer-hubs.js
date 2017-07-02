import {FETCH_HUBS, SET_HUBS} from "../actions/getHubs";

export const Hubs = (state = [], action) => {
    switch (action.type) {
        case FETCH_HUBS:
            return action.payload;
        case SET_HUBS:
            return action.payload;
    }
    return state;
};