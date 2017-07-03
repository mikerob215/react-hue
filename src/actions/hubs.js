import axios from "axios";

export const FETCH_HUBS = 'FETCH_HUBS';
const UPNP_DISCOVERY_URL = 'https://www.meethue.com/api/nupnp';

/**
 * @name fetchHubs
 * @description
 * Retrieves hubs on local network and dispatches
 * the result when the promise resolves
 * @return {function(*): Promise.<TResult>}
 */
export const fetchHubs = () => {
    const hubs = axios.get(UPNP_DISCOVERY_URL).then(response => response.data);
    return dispatch =>
        hubs.then(hubs => dispatch(setHubs(hubs)))
};

/**
 * @name setHubs
 * @description
 * Sends all hubs to reducers and set a default
 * status
 * @type {string}
 */
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

/**
 * @name connectToHub
 * @description
 * Connects to selected hub and set it as active
 * or changes the status of the given hub on error
 * @param hub
 * @return {function(*): Promise.<TResult>}
 */
export const connectToHub = hub => {
    const {internalipaddress, id} = hub;
    return dispatch =>
        axios.post(`http://${internalipaddress}/api`,
            {devicetype: `react-hue`})
            .then(data => {
                const response = data.data[0];
                if (response.success) {
                    return dispatch(setActiveHub(hub, response.success.username));
                }
                if (response.error) {
                    return dispatch(setHubError(hub, response.error.description))
                }
            })
};

/**
 * @name setActiveHub
 * @type {string}
 */
export const SET_ACTIVE_HUB = 'SET_ACTIVE_HUB';
export const setActiveHub = (hub, username) => {
    localStorage.setItem('HUE_USERNAME', username);
    localStorage.setItem('HUE_IP', hub.internalipaddress);
    return ({
        type: SET_ACTIVE_HUB,
        payload: {
            username: localStorage.getItem('HUE_USERNAME'),
            ip: localStorage.getItem('HUE_IP')
        }
    });
};

export const GET_ACTIVE_HUB = 'GET_ACTIVE_HUB';
export const getActiveHub = () =>
    ({
        type: GET_ACTIVE_HUB,
        payload: {
            username: localStorage.getItem('HUE_USERNAME'),
            ip: localStorage.getItem('HUE_IP')
        }
    });

/**
 * @name setHubError
 * @type {string}
 */
export const SET_HUB_STATUS = 'SET_HUB_ERROR';
export const setHubError = (hub, status) =>
    ({
        type: SET_HUB_STATUS,
        payload: {hub, status}
    });
