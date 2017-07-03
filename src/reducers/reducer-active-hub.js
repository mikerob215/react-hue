import {SET_ACTIVE_HUB} from "../actions/hubs";

const ActiveHub = (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_HUB:
            return action.payload
    }
    return state;
};

export default ActiveHub;