import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore();

const appElement = document.getElementById('app');
if (appElement !== null) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    appElement
  );
}
