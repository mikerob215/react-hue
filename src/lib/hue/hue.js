import axios from 'axios';
import * as R from 'ramda';

const extractData = R.prop('data');

const discover = () =>
  axios
    .get('https://www.meethue.com/api/nupnp')
    .then(extractData);

const connect = hub =>
  axios
    .post(`http://${hub.internalipaddress}/api`)
    .then(extractData);

const Hue = {
  discover,
  connect,
};

export default Hue;
