import {SET_CONFIG} from "../actions/set-config";

const HueConfig = (state, action) => {
    switch (action.type) {
        case SET_CONFIG:
            localStorage.setItem('hue_key', action.payload);
            return localStorage.getItem('hue_key');
    }
    return localStorage.getItem('hue_key');
};

export default HueConfig;