import * as R from "ramda";

const HUE_HUBS = 'HUE_HUBS';

const getItem = R.bind(localStorage.getItem, localStorage);

const setItem = R.bind(localStorage.setItem, localStorage);

const fromStorage = R.compose(JSON.parse, getItem);

const toStorage = R.compose(setItem, JSON.stringify);

const hubs = R.compose(fromStorage, R.identity(HUE_HUBS));

const hue = {};

export default hue;

