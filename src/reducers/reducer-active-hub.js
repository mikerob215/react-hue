import {GET_ACTIVE_HUB} from "../actions/hubs";

const ActiveHub = (state = null, action) => {
    switch (action.type) {
        case GET_ACTIVE_HUB:
            if (action.payload.username === null) return null;
            return action.payload
    }
    return state;
};

export default ActiveHub;