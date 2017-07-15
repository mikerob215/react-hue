import axios from "axios";
import * as R from "ramda";
import {hubQuery, hubs} from "../hue-interface/index";

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
    return dispatch => hubs.then(R.compose(dispatch, setHubs));
};

export const getHubs =
    R.compose(JSON.parse, localStorage.getItem, R.identity('HUE_HUBS'));

export const getHub = id => R.propOr(null, id)(getHubs);

export const modifyHubAttribute = (id, attribute, value) => {
    const hubStore = hubs();
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
export const setHubs = hubss => {
    hubss.forEach(hub => {
        const {id, internalipaddress} = hub;
        if (!hubQuery(id)) {
            addHub(id, {id, ip: internalipaddress, status: 'Unlinked'});
        }
    });

    return ({
        type: SET_HUBS,
        payload: hubs()
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
 * @name setHubStatus
 * @type {string}
 */
export const SET_HUB_STATUS = 'SET_HUB_STATUS';
export const setHubStatus = hub => {
    return ({
        type: SET_HUB_STATUS,
        payload: hubs()
    });
};
