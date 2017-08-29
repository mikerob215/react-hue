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
        const hubs = Storage.read('HUE_HUBS');

        dispatch({type: HUBS_FETCHING});
        dispatch(checkHubs(hubs));
        if (hubs) {
            dispatch(checkHubs(hubs));
            dispatch({
                type: HUB_FETCH_SUCCESSFUL,
                payload: hubs
            });
            return;
        }

        Hue.discover()
            .then(response => {
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
export const connectToHub = hub => dispatch => {
    dispatch({
        type: HUB_CONNECTION_ATTEMPT,
    });

    if (Storage.read(hub.id)) {
        dispatch({
            type: HUB_CONNECTION_SUCCESSFUL,
            payload: Storage.read(hub.id),
        });
        return;
    }

    Hue.connect(hub)
        .then(response => {
            if (response.error) {
                dispatch({
                    type: HUB_NEEDS_LINK,
                });
                return;
            }

            Storage.save(hub.id, response.success.username);
            dispatch({
                type: HUB_CONNECTION_SUCCESSFUL,
                payload: Storage.read(hub.id),
            });
        });
};

export const HUB_CHANGED = 'HUB_CHANGED';
export const changeHub = R.always(HUB_CHANGED);
