import {combineReducers} from "redux";
import LightsReducer from "./reducer-lights";
import HueConfig from "./reducer-hue-config";
import {Hubs} from "./reducer-hubs";
import ActiveHub from "./reducer-active-hub";

const rootReducer = combineReducers({
    lights: LightsReducer,
    config: HueConfig,
    hubs: Hubs,
    activeHub: ActiveHub
});

export default rootReducer;