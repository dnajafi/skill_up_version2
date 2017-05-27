import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from "redux-logger";
import rootReducer from '../reducers/root_reducer';

/*
redux-thunk and redux-logger are two middleware packages that are used in the store creation. 
redux-thunk is used to dispatch functions instead of action objects and the middleware executes the function. 
When the function is executed, one or more action objects are dispatched to the store. 
redux-logger provides useful log messages in the browser console.
*/

const logger = createLogger();

const store = createStore(rootReducer,
  {},
  applyMiddleware(thunk, logger)
);

export default store;