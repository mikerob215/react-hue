import createReducer from "../lib/redux-helpers/create-reducer";
import {storageStatuses} from "../constants";
import {STORAGE_STATUS_EMPTY, STORAGE_STATUS_SAVED} from "../constants/index";

const storageReducer = createReducer(storageStatuses.INITIAL, {
    [STORAGE_STATUS_EMPTY](state, action) {
        return action.payload;
    },
    [STORAGE_STATUS_SAVED](state, action) {
       return action.payload;
    }
});

export default storageReducer;