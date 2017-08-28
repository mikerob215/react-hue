import Hue from '../lib/hue/hue';
import Storage from '../lib/storage/storage';
import * as R from "ramda";
import {checkHubs} from "./storage-actions";

const extractId = R.prop('id');

const groupById = R.groupBy(extractId);

const normalizeById =  R.compose(R.map(R.head), groupById);

const saveHubs = Storage.save('HUE_HUBS');

export const HUBS_FETCHING = 'HUBS_FETCHING';
export const HUB_FETCH_SUCCESSFUL = 'HUB_FETCH_SUCCESSFUL';
export const fetchHubs = () => {
    return dispatch => {
        const readHubs = Storage.read('HUE_HUBS');
        dispatch({type: HUBS_FETCHING});
        dispatch(checkHubs(readHubs));
        if (readHubs) {
            dispatch(checkHubs(readHubs));
            dispatch({
                type: HUB_FETCH_SUCCESSFUL,
                payload: readHubs
            });
            return;
        }
        return Hue.discover()
            .then((response) => {
                const normalizedResponse = normalizeById(response);
                saveHubs(normalizedResponse);
                dispatch({
                    type: HUB_FETCH_SUCCESSFUL,
                    payload: normalizedResponse,
                });
            });
    };
};

export const HUB_CONNECTION_ATTEMPT = 'HUB_CONNECTION_ATTEMPT';
export const HUB_CONNECTION_SUCCESSFUL = 'HUB_CONNECTION_SUCCESSFUL';
export const HUB_NEEDS_LINK = 'HUB_NEEDS_LINKS';
export const connectToHub = hub => (dispatch) => {
    dispatch({
        type: HUB_CONNECTION_ATTEMPT,
    });
    Hue.connect(hub)
        .then(response => {
            if (response.error) {
                return dispatch({
                    type: HUB_NEEDS_LINK,
                });
            }
            return dispatch({
                type: HUB_CONNECTION_SUCCESSFUL,
                payload: response,
            });
        });
};

