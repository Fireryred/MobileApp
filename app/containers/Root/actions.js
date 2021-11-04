import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  setLoading: ['status'],
  setPopup: ['status', 'title', 'message'],
  closePopup: null,
});

const Actions = {
  Types,
  Creators,
};

export default Actions;
