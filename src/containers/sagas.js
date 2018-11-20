/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:14:50-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-09T10:15:37-06:00
 */
import { all } from 'redux-saga/effects';
import { sagas as Home } from './Home';
import { sagas as Login } from './Login';
import { sagas as Profile } from './Profile';
import { sagas as Package } from './Package';

function* rootSaga() {
  yield all([
    Home(),
    Login(),
    Profile(),
    Package(),
  ]);
}

export default rootSaga;
