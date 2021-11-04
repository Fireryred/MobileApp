import {fromJS} from 'immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

const INITIAL_STATE = fromJS({
  default: null,
});

export const setInitial = () => INITIAL_STATE;

const {Types} = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_INITIAL]: setInitial,
});

export default reducer;
