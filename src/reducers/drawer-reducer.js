import {DRAWER_STATE_CHANGED} from '../actions/drawer-actions';

const drawerReducer = (state = false, action) => {
  switch (action.type) {
    case DRAWER_STATE_CHANGED:
      return !state;
    default:
      return state;
  }
};

export default drawerReducer;
