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
        payload: hubs.map(hub => {
            hub.status = 'UNKNOWN';
            return hub;
        })
    });
};

export const connectToHub = (hub) => {
    const {internalipaddress, id} = hub;
    return dispatch =>
        axios.post(`http://${internalipaddress}/api`,
            {devicetype: `react-hue#web`})
            .then(data => {
                const response = data.data[0];
                if (response.success) {
                    return dispatch(setActiveHub(response.success.username));
                }
                if (response.error) {
                    return dispatch(setHubError(hub, response.error.description))
                }
            })
};

export const SET_ACTIVE_HUB = 'SET_ACTIVE_HUB';
export const setActiveHub = hub =>
    ({
        type: SET_ACTIVE_HUB,
        payload: hub
    });

export const SET_HUB_STATUS = 'SET_HUB_ERROR';
export const setHubError = (hub, status) =>
    ({
        type: SET_HUB_STATUS,
        payload: {hub, status}
    });
