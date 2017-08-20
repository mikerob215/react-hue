import * as R from "ramda";

const read = R.bind(localStorage.getItem, localStorage);

const toStorage = R.bind(localStorage.setItem, localStorage);

const save = R.curry((name, value) => toStorage(name, value));

const destroy = R.bind(localStorage.removeItem, localStorage);

const clear = R.bind(localStorage.clear, localStorage);

const Storage = {
    read,
    save,
    destroy,
    clear,
};

export default Storage;