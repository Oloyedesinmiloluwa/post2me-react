import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (innitialState) => createStore( rootReducer, innitialState, composeEnhancer(applyMiddleware(thunk)));
export default store;
