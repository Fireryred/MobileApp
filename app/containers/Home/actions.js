import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setInitial: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
