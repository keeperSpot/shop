import React from 'react';
import './App.css';

import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import storage from 'localforage';
import { PersistGate } from 'redux-persist/integration/react';

import { getStore } from 'common/reducers';

import { Initial } from 'components/Initial';
import { getStorage } from 'common/storage';
import { notify } from 'helpers/alert';
import { css } from 'styles';

import { GettingStarted } from 'components/examples/GettingStarted';
import { MonorepoIntro } from 'components/examples/MonorepoIntro';

const { store, persistor } = getStore(storage);

window.persistor = persistor;
window.storage = getStorage(window.localStorage);
window.notify = notify;
window.css = css;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <>
        <Initial />
        <Router>
          <GettingStarted path='/example/' />
          <MonorepoIntro path='/example/intro/' />
        </Router>
      </>
    </PersistGate>
  </Provider>
);

export default App;
