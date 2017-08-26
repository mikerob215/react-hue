import Hue from '../lib/hue/hue';

export const HUBS_FETCHED = 'HUBS_FETCHED';
export const HUB_FETCH_SUCCESSFUL = 'HUB_FETCH_SUCCESSFUL';
export const fetchHubs = () =>
  (dispatch) => {
    dispatch({ type: HUBS_FETCHED });
    return Hue.discover()
      .then((response) => {
        dispatch({
          type: HUB_FETCH_SUCCESSFUL,
          payload: response,
        });
      });
  };


export const HUB_CONNECTION_SUCCESSFUL = 'HUB_CONNECTION_SUCCESSFUL';
export const HUB_CONNECTION_ATTEMPT = 'HUB_CONNECTION_ATTEMPT';
export const connectToHub = hub => (dispatch) => {
  dispatch({
    type: HUB_CONNECTION_ATTEMPT,
  });
  Hue.connect(hub)
    .then(response => {
      if (response.error) {
        return dispatch({
          type: 'HUB_NEEDS_LINK',
        });
      }
      return dispatch({
        type: HUB_CONNECTION_SUCCESSFUL,
        payload: response,
      });
    });
};

