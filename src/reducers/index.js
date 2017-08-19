import combineReducers from "redux/es/combineReducers";
import drawerReducer from "./drawer-reducer";

const rootReducer = combineReducers({
    drawer: drawerReducer,
});

export default rootReducer;