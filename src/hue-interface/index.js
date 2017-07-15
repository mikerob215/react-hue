import * as R from "ramda";

const HUE_HUBS = 'HUE_HUBS';

const fromStorage = R.compose(JSON.parse, R.bind(localStorage.getItem, localStorage));

export const hubs = () => fromStorage(HUE_HUBS);

const idLens = R.lensProp('id');

export const hubQuery = R.tryCatch(R.compose(R.view(idLens), hubs), R.always(undefined));
