import createReducer from "../lib/redux-helpers/create-reducer";
import {storageStatuses} from "../constants";
import {STORAGE_STATUS_CHANGED} from "../constants/index";

const storageReducer = createReducer(storageStatuses.INITIAL, {
    [STORAGE_STATUS_CHANGED](state, action) {
        return action.payload;
    }
});

export default storageReducer;