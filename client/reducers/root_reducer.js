import { combineReducers } from 'redux';
import { loginReducer } from './login_reducer';

const rootReducer = combineReducers({
  currentUser: loginReducer
});

export default rootReducer;