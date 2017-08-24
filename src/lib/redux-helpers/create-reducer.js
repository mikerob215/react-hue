import * as R from 'ramda';

const createReducer = (initialState, handlers) =>
  (state = initialState, action) =>
    R.propOr(R.identity, action.type, handlers)(state, action);

export default createReducer;
