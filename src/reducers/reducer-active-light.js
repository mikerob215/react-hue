import {SET_ACTIVE_LIGHT} from "../actions/active-light";

export const ActiveLightReducer = (state = null, {type, light}) => {
    switch (type) {
        case SET_ACTIVE_LIGHT:
            return light;
    }

    return state;
};