import React from 'react';
import { render } from 'preact';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

require('react-web-vector-icons/fonts');


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  render(<App />, rootElement, rootElement.firstElementChild);
} else {
  render(<App />, rootElement);
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
