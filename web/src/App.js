import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import storage from 'localforage';
import { PersistGate } from 'redux-persist/integration/react';

import { getStore } from 'common/reducers';

import { Initial } from 'components/Initial';
import { getStorage } from 'common/storage';
import { notify } from 'helpers/alert';
import { css } from 'styles';

import { PrivateRoutes } from 'navigation/PrivateRoutes';
import { PublicRoutes } from 'navigation/publicRoutes';

const { store, persistor } = getStore(storage);

window.persistor = persistor;
window.storage = getStorage(window.localStorage);
window.notify = notify;
window.css = css;


const isAuth = true;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <>
        <Initial />
        {isAuth?<PrivateRoutes />:<PublicRoutes />}
      </>
    </PersistGate>
  </Provider>
);

export default App;
