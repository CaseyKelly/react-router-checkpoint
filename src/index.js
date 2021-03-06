import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import 'bootswatch/dist/materia/bootstrap.min.css';
import './index.css';

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
