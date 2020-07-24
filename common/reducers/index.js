import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import thunk from 'redux-thunk';

import { demo } from './demo';
import { auth } from './auth';
import { theme } from './theme';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger');
  const logger = createLogger({});
  middlewares.push(logger);
}

const reducers = combineReducers({
  demo,
  auth,
  theme,
});

export const getStore = (storage) => {
  const persistConfig = {
    key: 'root-store',
    storage,
    debug: true,
    stateReconciler: autoMergeLevel2,
    whitelist: ['auth', 'demo',],
  };
  const persistedReducer = persistReducer(persistConfig, reducers);

  const store = createStore(persistedReducer, applyMiddleware(...middlewares));
  const persistor = persistStore(store);
  return { store, persistor };
};
