import {fromJS} from 'immutable';
import {createReducer} from 'reduxsauce';
import Actions from './actions';

const INITIAL_STATE = fromJS({
  isLoading: false,
  popupOpen: false,
  popupMessage: '',
  popupStatus: 'info',
  popupTitle: '',
});

export const doSetLoading = (state, {status}) =>
  state.merge({isLoading: status});

export const doSetPopup = (state, {status, title, message}) =>
  state.merge({
    popupOpen: true,
    popupMessage: message,
    popupTitle: title,
    popupStatus: status,
  });

export const doClosePopup = (state) =>
  state.merge({
    popupOpen: false,
    popupMessage: '',
    popupTitle: '',
    popupStatus: 'info',
  });
export const doSetIsAppVisited = (state, {status}) =>
  state.merge({
    isAppVisited: status,
  });

const {Types} = Actions;

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_LOADING]: doSetLoading,
  [Types.SET_POPUP]: doSetPopup,
  [Types.CLOSE_POPUP]: doClosePopup,
});

export default reducer;
