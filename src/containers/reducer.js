/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:29:19-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-09T10:15:13-06:00
 */
import { combineReducers } from 'redux';
import { reducer as Home } from './Home';
import { reducer as Login } from './Login';
import { reducer as Profile } from './Profile';
import { reducer as Package } from './Package';

const rootReducer = combineReducers({
  Home,
  Login,
  Profile,
  Package,
});

export default rootReducer;
