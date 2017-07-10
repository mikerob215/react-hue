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
        hubs.then(data => dispatch(setHubs(data)));
};

export const getHub = id => {
    try {
        return JSON.parse(localStorage.getItem('HUE_HUBS'))[id];
    } catch (e) {
        return null;
    }
};

export const modifyHubAttribute = (id, attribute, value) => {
    const hubStore = JSON.parse(localStorage.getItem('HUE_HUBS'));
    hubStore[`${id}`][attribute] = value;
    localStorage.setItem('HUE_HUBS', JSON.stringify(hubStore));
};

export const addHub = (id, config) => {
    return localStorage.setItem('HUE_HUBS', JSON.stringify(Object.assign({}, {[id]: {...config}})));
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
    hubs.forEach(hub => {
        const {id, internalipaddress} = hub;
        if (!getHub(id)) {
            addHub(id, {id, ip: internalipaddress, status: 'Unlinked'});
        }
    });

    return ({
        type: SET_HUBS,
        payload: JSON.parse(localStorage.getItem('HUE_HUBS'))
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
    const {ip, id} = hub;
    return dispatch =>
        axios.post(`http://${ip}/api`,
            {devicetype: `react-hue`})
            .then(data => {
                const response = data.data[0];
                if (response.success) {
                    modifyHubAttribute(id, 'status', 'linked');
                    modifyHubAttribute(id, 'username', response.success.username);
                    return dispatch(setHubStatus(getHub(hub.id)));
                }
                if (response.error) {
                    modifyHubAttribute(id, 'status', response.error.description);
                    return dispatch(setHubStatus(getHub(hub.id)))
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
 * @name setHubStatus
 * @type {string}
 */
export const SET_HUB_STATUS = 'SET_HUB_STATUS';
export const setHubStatus = hub => {
    return ({
        type: SET_HUB_STATUS,
        payload: JSON.parse(localStorage.getItem('HUE_HUBS'))
    });
};
