import { isNumber } from 'lodash-es';
import { load } from './http';
import { Storage } from './shared';

const $7_DAYS = 1000 * 60 * 60 * 24 * 7;

const loadFromCache = ({ method, url }) => new Promise((resolve) => {
  const startTime = new Date();
  Storage().load({
    key: 'httpCache',
    id: `${method}$${url.replace('_', '')}`,
  })
    .then((response) => {
      console.log(`URL ${url} served from cache... ${(new Date()) - startTime}ms`);
      return resolve({ ...response, loading: false, _fromCache: true });
    })
    .catch((error) => {
      switch (error.name) {
        case 'NotFoundError':
          console.log(`URL ${url} has no cache in local storage`);
          break;
        case 'ExpiredError':
          console.log(`URL ${url} has cache has expired`);
          break;
        default:
          console.log('CACHE ERROR', error);
      }
    });
});

const loadAndSaveToCache =
  ({ method, url, expiration, refresh, options }) => new Promise(((resolve, reject) => {
    load(url, { method, ...options })
      .then((response) => {
        resolve(response);
        Storage().save({
          key: 'httpCache',
          id: `${method}$${url.replace('_', '')}`,
          expiration,
          data: response,
        });
        refresh(response);
      })
      .catch(reject);
  }));

export const sendData = (method) => (url, data, options = {}) =>
  load(url, { method, data, ...options });

export const loadData = (method) => (url, options) =>
  load(url, { method, ...options });

export const getData = (method) => (url, options = {}, refresh = (res) => res) => {
  const { cache = null, ...opts } = options;
  if (cache) {
    return Promise.race([
      loadAndSaveToCache({
        method, url, expiration: isNumber(cache) ? cache : $7_DAYS, refresh, options,
      }),
      loadFromCache({ method, url }),
    ]);
  }
  return load(url, { method, ...opts });
};
