import axios from 'axios';
import * as R from 'ramda';

const extractData = R.prop('data');

const discover = () =>
  axios
    .get('https://www.meethue.com/api/nupnp')
    .then(extractData);

const connect = hub =>
  axios
    .post(`http://${hub.internalipaddress}/api`, {
      devicetype: 'react_hue',
    })
    .then(R.compose(R.head, extractData));

const HueControllerFactory = R.curry((hubs, hub) => {
    const { internalipaddress } = hub;
});

const Hue = {
    discover,
    connect,
    HueControllerFactory
};

export default Hue;
