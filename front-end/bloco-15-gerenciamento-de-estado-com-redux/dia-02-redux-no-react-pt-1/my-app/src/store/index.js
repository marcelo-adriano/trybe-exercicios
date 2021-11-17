import { createStore, compose } from 'redux';
import rootReducer from '../reducers/index';

const extension = window.devToolsExtension() || ((f) => f);

const store = createStore(rootReducer, compose(extension));

export default store;
