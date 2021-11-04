import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setAuthSuccess: ['data'],
  temporaryLogout: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
