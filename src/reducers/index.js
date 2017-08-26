import combineReducers from 'redux/es/combineReducers';
import drawerReducer from './drawer-reducer';
import hubsReducer from './hubs-reducer';
import HubReducer from './hub-reducer';

const rootReducer = combineReducers({
  drawer: drawerReducer,
  hubs: hubsReducer,
  hub: HubReducer,
});

export default rootReducer;
