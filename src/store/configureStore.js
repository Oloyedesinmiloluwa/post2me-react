import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = (innitialState) => createStore( rootReducer, innitialState, composeEnhancer(applyMiddleware(thunk, reduxImmutableStateInvariant())));
export default store;
