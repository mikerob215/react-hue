import createReducer from "../lib/redux-helpers/create-reducer";
import Storage from '../lib/storage/storage';
import {HUB_FETCH_SUCCESSFUL, HUBS_FETCHING} from "../actions/hubs-actions";
import * as R from "ramda";

const savedHubsOrEmpty = R.ifElse(R.compose(R.not, R.isEmpty), R.identity, R.always({}));

const initialState = {
  hubs: savedHubsOrEmpty(Storage.read('HUE_HUBS')),
  status: 'INITIAL',
};

const hubsReducer = createReducer(initialState, {
    [HUBS_FETCHING](state) {
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
