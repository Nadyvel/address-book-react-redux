import { createStore } from 'redux';
// import reducer from "./reducers/reducer";
// import modalReducer from "./reducers/modalReducer";
import reducer from './reducers/index'

// These consts allows to work with redux devtools and connects store for asynchronous requests
const DevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(reducer, DevTools);

export default store;