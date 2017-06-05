import { combineReducers } from 'redux';
import { loginReducer } from './login_reducer';

const rootReducer = combineReducers({
  loginState: loginReducer
});



export default rootReducer;