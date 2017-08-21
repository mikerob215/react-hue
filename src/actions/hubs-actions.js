import Hue from '../lib/hue/hue';

export const HUBS_FETCHED = 'HUBS_FETCHED';
export const HUB_FETCH_SUCCESSFUL = 'HUB_FETCH_SUCCESSFUL';
export const fetchHubs = () =>
    (dispatch) => {
        dispatch({type: HUBS_FETCHED});
        return Hue.discover()
            .then((response) => {
                dispatch({
                    type: HUB_FETCH_SUCCESSFUL,
                    payload: response,
                });
            });
    };
