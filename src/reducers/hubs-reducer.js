import {HUB_FETCH_SUCCESSFUL, HUBS_FETCHED} from "../actions/hubs-actions";

const initialState = {
    hubs: [],
    status: 'INITIAL',
};

const hubsReducer = (state = initialState, action) => {
    switch (action.type) {
        case HUBS_FETCHED:
            return {
                ...state,
                status: 'LOADING'
            };
        case HUB_FETCH_SUCCESSFUL:
            return {
                status: 'SUCCESSFUL',
                hubs: action.payload
            };
        default:
            return state;
    }
};

export default hubsReducer;