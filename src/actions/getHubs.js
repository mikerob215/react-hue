import axios from "axios";

export const FETCH_HUBS = 'FETCH_HUBS';
const UPNP_DISCOVERY_URL = 'https://www.meethue.com/api/nupnp';
export const fetchHubs = () => {
    const hubs = axios.get(UPNP_DISCOVERY_URL).then(response => response.data);
    return dispatch =>
        hubs.then(hubs => dispatch(setHubs(hubs)))
};

export const SET_HUBS = 'SET_HUBS';
export const setHubs = hubs => {
    return ({
        type: SET_HUBS,
        payload: hubs
    });
};