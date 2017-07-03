import {combineReducers} from "redux";
import LightsReducer from "./reducer-lights";
import {HubsReducer} from "./reducer-hubs";
import ActiveHubReducer from "./reducer-active-hub";
import {ActiveLightReducer} from "./reducer-active-light";

const rootReducer = combineReducers({
    lights: LightsReducer,
    hubs: HubsReducer,
    activeHub: ActiveHubReducer,
    activeLight: ActiveLightReducer
});

export default rootReducer;