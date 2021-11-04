import apisauce from 'apisauce';

const createApi = (options = {baseURL: '/'}) => apisauce.create(options);

export default createApi;
