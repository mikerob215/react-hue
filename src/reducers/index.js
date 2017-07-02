import {combineReducers} from "redux";
import LightsReducer from "./reducer-lights";
import HueConfig from "./reducer-hue-config";
import {Hubs} from "./reducer-hubs";

const rootReducer = combineReducers({
    lights: LightsReducer,
    config: HueConfig,
    hubs: Hubs
});

export default rootReducer;