import {combineReducers} from "redux";
import LightsReducer from "./reducer-lights";
import {HubsReducer} from "./reducer-hubs";

const rootReducer = combineReducers({
    lights: LightsReducer,
    hubs: HubsReducer,
});

export default rootReducer;