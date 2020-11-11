import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './js/redux/create';
import App from './App';

const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, root);