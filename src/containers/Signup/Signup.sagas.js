/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:18:17-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T19:51:22-06:00
 */
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { Auth } from 'aws-amplify';
import {
  REGISTER,
  registerFail,
  registerSuccess,
} from './Signup.ducks';

function* registerUser({ payload }) {
  try {
    const { data } = payload;
    const { user } = yield call(Auth.signUp, data);

    yield put(registerSuccess(user));
  } catch (error) {
    yield put(registerFail(error));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(REGISTER, registerUser),
  ]);
}

export default rootSaga;
export {
  registerUser,
};
