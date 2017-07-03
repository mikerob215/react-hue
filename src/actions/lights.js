import axios from "axios";

export const fetchLights = hub => {
    const {ip, username} = hub;
    return dispatch =>
        axios.get(`http://${ip}/api/${username}/lights`)
            .then(data => dispatch(setLights(data.data)));
};

export const SET_LIGHTS = 'SET_LIGHTS';
export const setLights = lights => {
    return {
        type: SET_LIGHTS,
        lights: lights
    };
};

