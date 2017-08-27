import createReducer from "../lib/redux-helpers/create-reducer";
import {HUB_FETCH_SUCCESSFUL, HUBS_FETCHED} from "../actions/hubs-actions";

const initialState = {
  hubs: [],
  status: 'INITIAL',
};

const hubsReducer = createReducer(initialState, {
    [HUBS_FETCHED](state) {
        return {
            ...state,
            status: 'LOADING',
        };
    },
    [HUB_FETCH_SUCCESSFUL](state, action) {
        return {
            ...state,
            status: 'SUCCESSFUL',
            hubs: action.payload,
        };
    }
});

export default hubsReducer;
