import axios from "axios";

const extractData = response => response.data;

const discover = () =>
    axios
        .get('https://www.meethue.com/api/nupnp')
        .then(extractData);

const Hue = {
    discover
};

export default Hue;