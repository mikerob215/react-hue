import {combineReducers} from "redux";
import LightsReducer from "./reducer-lights";
import {Hubs} from "./reducer-hubs";
import ActiveHub from "./reducer-active-hub";

const rootReducer = combineReducers({
    lights: LightsReducer,
    hubs: Hubs,
    activeHub: ActiveHub
});

export default rootReducer;