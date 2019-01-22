import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app-container';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
        document.getElementById('root')
  );
