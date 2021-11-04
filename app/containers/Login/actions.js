import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setAuthSuccess: ['data'],
  temporaryLogout: null,

  attemptLogin: ['payload'],
  setLoginProgress: ['loginProgressStatus'],
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
