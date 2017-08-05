import axios from "axios";
import * as R from "ramda";
import hue from '../hue-interface'

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
        payload: hubs
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
            {
                devicetype: `react-hue`
            })
            .then(data => {
                const response = data.data[0];
                if (response.success) {
                    hue.toStorage(hub);
                    return dispatch();
                }
                if (response.error) {
                    return dispatch()
                }
            })
};
