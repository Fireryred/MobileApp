/* eslint-disable no-alert */
import {takeLatest, put, call, select} from 'redux-saga/effects';
import Actions from './actions';
import ReactNativeBiometrics from 'react-native-biometrics';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* makeAttemptLogin({payload}) {
  //TODO:
  // api call

  const CurrentState = (yield select()).toJS();

  if (CurrentState.auth.isLoggedIn) {
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

function* makeBiometric(/*payload*/) {
  let payload = 'Gershom';
  const pKey = '';
  const sign = '';
  ReactNativeBiometrics.createKeys('Confirm fingerprint').then(
    (resultObject) => {
      const {publicKey} = resultObject;
      console.log('==================Public Key==================');
      console.log(publicKey);
      console.log('==================Public Key==================');
      pKey = publicKey;
    },
  );
  ReactNativeBiometrics.createSignature({
    promptMessage: 'Sign in',
    payload: payload,
  }).then((resultObject) => {
    const {success, signature} = resultObject;

    if (success) {
      console.log('==================Signature==================');
      console.log(signature);
      console.log('==================Signature==================');
      sign = signature;
    }
  });
  const data = {
    name: payload,
    publicKey: pKey,
    signature: sign,
  };
  yield put(Actions.Creators.setAuthSuccess(data));
}
// function* makeLogout() {

// }

export default function* authSaga() {
  yield takeLatest(Actions.Types.ATTEMPT_LOGIN, makeAttemptLogin);
  yield takeLatest(Actions.Types.ATTEMPT_BIOMETRIC, makeBiometric);
  // yield takeLatest(Actions.Types.LOGOUT, makeLogout);
}
