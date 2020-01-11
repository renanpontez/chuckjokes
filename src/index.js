/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import configureStore, { history } from './store/configureStore';
import Root from './components/_app/Root';
import './styles/styles.scss'; 

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>, 
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/_app/Root', () => {
    const NewRoot = require('./components/_app/Root').default;
    render(
        <AppContainer>
          <NewRoot store={store} history={history} />
        </AppContainer>,
      document.getElementById('app')
    );
  });
}