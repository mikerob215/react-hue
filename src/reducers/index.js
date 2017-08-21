import combineReducers from 'redux/es/combineReducers';
import drawerReducer from './drawer-reducer';
import hubsReducer from './hubs-reducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    hubs: hubsReducer,
});

export default rootReducer;
