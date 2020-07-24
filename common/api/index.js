import { loadData, sendData, getData } from '../helpers/httpCache';
import { load, axios } from '../helpers/http';

export default {
  axios,
  request: load,

  get: getData('GET'),
  delete: loadData('DELETE'),
  head: loadData('HEAD'),
  options: loadData('OPTIONS'),

  post: sendData('POST'),
  put: sendData('PUT'),
  patch: sendData('PATCH'),
};
