import combineReducers from 'redux/es/combineReducers';
import drawerReducer from './drawer-reducer';
import hubsReducer from './hubs-reducer';
import HubReducer from './hub-reducer';
import storageReducer from "./storage-reducer";

const rootReducer = combineReducers({
    drawer: drawerReducer,
    hubs: hubsReducer,
    hub: HubReducer,
    storageState: storageReducer,
});

export default rootReducer;
