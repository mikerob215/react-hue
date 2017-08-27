import * as R from 'ramda';
import createReducer from "../lib/redux-helpers/create-reducer";

const extractId = R.prop('id');

const groupById = R.groupBy(extractId);

const normalizeById =  R.compose(R.map(R.head), groupById);

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
            hubs: normalizeById(action.payload),
        };
    }
});

export default hubsReducer;
