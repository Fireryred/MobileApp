import createApi from '../utils/createApi';
import {API} from '../config';

const WebServices = (options = API.SERVER.WEBSERVICES.OPTIONS) => {
  const api = createApi(options);

  const call = (method, path, params = {}, headers) => {
    switch (method) {
      case 'update':
        return api.update(`${path}`, params);
      case 'patch':
        return api.patch(`${path}`, params);
      case 'delete':
        return api.delete(`${path}`);
      case 'get':
        return api.get(`${path}`);
      case 'post':
        return api.post(path, params, headers);
      case 'put':
        return api.put(`${path}`, params);
      default:
        break;
    }
    return false;
  };

  const setHeader = (key, value) => {
    api.setHeader(key, value);
  };

  return {
    call,
    setHeader,
  };
};

export default WebServices;
