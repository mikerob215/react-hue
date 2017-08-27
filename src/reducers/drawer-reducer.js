import createReducer from "../lib/redux-helpers/create-reducer";
import * as R from "ramda";
import {DRAWER_STATE_CHANGED} from "../actions/drawer-actions";

const drawerReducer = createReducer(false, {
  [DRAWER_STATE_CHANGED](state) {
    return R.not(state);
  },
});

export default drawerReducer;
