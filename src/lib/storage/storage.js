import * as R from 'ramda';

// eslint-disable-next-line no-undef
const read = R.compose(JSON.parse, R.bind(localStorage.getItem, localStorage));

// eslint-disable-next-line no-undef
const toStorage = R.bind(localStorage.setItem, localStorage);

const save = R.curry((name, value) => toStorage(name, JSON.stringify(value)));

// eslint-disable-next-line no-undef
const destroy = R.bind(localStorage.removeItem, localStorage);

// eslint-disable-next-line no-undef
const clear = R.bind(localStorage.clear, localStorage);

const Storage = {
  read,
  save,
  destroy,
  clear,
};

export default Storage;
