import createReducer from '../lib/redux-helpers/create-reducer';
import {HUB_CHANGED, HUB_CONNECTION_ATTEMPT, HUB_CONNECTION_SUCCESSFUL, HUB_NEEDS_LINK} from "../actions/hubs-actions";
import * as R from "ramda";

const initialState = {
    status: 'INITIAL',
    error: null,
    hub: null,
};

const HubReducer = createReducer(initialState, {
    [HUB_CONNECTION_ATTEMPT](state) {
        return {
            ...state,
            status: 'LOADING',
        };
    },
    [HUB_NEEDS_LINK](state) {
        return {
            ...state,
            status: 'NEEDS_LINKING',
        };
    },
    [HUB_CONNECTION_SUCCESSFUL](state, action) {
        return {
            ...state,
            status: 'SUCCESSFUL',
            hub: action.payload,
        }
    },
    [HUB_CHANGED]: R.always({
        status: 'INITIAL',
        hub: null,
    })
});

export default HubReducer;
