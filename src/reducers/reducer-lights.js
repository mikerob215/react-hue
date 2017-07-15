import {SET_LIGHTS} from "../actions/lights";

const LightsReducer = (state = [], action) => {
    switch (action.type) {
        case SET_LIGHTS:
            return action.lights;
        default:
            return state;
    }
};

export default LightsReducer;