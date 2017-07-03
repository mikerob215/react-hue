import {GET_ACTIVE_HUB} from "../actions/hubs";

const ActiveHub = (state = null, action) => {
    switch (action.type) {
        case GET_ACTIVE_HUB:
            return action.payload
    }
    return state;
};

export default ActiveHub;