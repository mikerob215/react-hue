import * as R from 'ramda';
import createReducer from "../lib/redux-helpers/create-reducer";

const initialState = {
  hubs: [],
  status: 'INITIAL',
};

const hubsReducer = createReducer(initialState, {
    HUBS_FETCHED(state) {
        return {
            ...state,
            status: 'LOADING',
        };
    },
    HUB_FETCH_SUCCESSFUL(state, action) {
        return {
            status: 'SUCCESSFUL',
            hubs: R.compose(R.map(R.head), R.groupBy(R.prop('id')))(action.payload),
        };
    }
});

export default hubsReducer;
