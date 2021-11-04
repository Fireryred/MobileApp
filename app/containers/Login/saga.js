/* eslint-disable no-alert */
import {takeLatest, put, call, select} from 'redux-saga/effects';
import Actions from './actions';

const delay = ms => new Promise(res => setTimeout(res, ms));

function* makeAttemptLogin({payload}) {
  //TODO: 
  // api call

  const CurrentState = (yield select()).toJS();

  if (CurrentState.auth.isLoggedIn){

  } else {

  }
  console.log(CurrentState);

  yield put(Actions.Creators.setLoginProgress(true));
  
  yield call(delay, 3000);
  
  const response = {
    ok: true,
    data: {
      name: 'Gershom',
    },
  };
  yield put(Actions.Creators.setAuthSuccess(response.data));

  yield put(Actions.Creators.setLoginProgress(false));

 

  console.log(payload);
}

// function* makeLogout() {
 
// }

export default function* authSaga() {
  yield takeLatest(Actions.Types.ATTEMPT_LOGIN, makeAttemptLogin);
  // yield takeLatest(Actions.Types.LOGOUT, makeLogout);
}
