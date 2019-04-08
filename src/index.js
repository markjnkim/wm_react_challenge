import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import App from './components/App';
import configureStore from './store/configureStore';

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    min-width: 490px !important;
  }
`;

const cacheStore = window.localStorage.getItem('store') || {};
const store = configureStore(cacheStore);

render(
  <Provider store={store}>
    <React.Fragment>
      <GlobalStyle />
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root'),
);
