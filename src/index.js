import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import './index.css';
// import App from './App';

import * as serviceWorker from './serviceWorker';
import Routes from './components/Routes';
import innitialState from './reducers/innitialState';

const store = configureStore(innitialState);

ReactDOM.render(
<Provider store={store}>
<Routes />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
