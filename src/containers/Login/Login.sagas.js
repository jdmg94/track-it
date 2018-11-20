/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:20:43-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-14T07:02:38-06:00
 */
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';

import {
  API,
  Auth,
  graphqlOperation,
} from 'aws-amplify';

import {
  LOGIN,
  loginFail,
  loginSuccess,
} from './Login.ducks';

import { getUser } from '../../graphql/queries';

function* authenticateUser({ payload }) {
  try {
    const { email, password } = payload;
    const user = yield call(Auth.signIn, email, password);
    const getUserOperation = graphqlOperation(getUser, { id: user.idToken });
    const { data } = yield call(API.graphql, getUserOperation);

    yield put(loginSuccess(data.user));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(LOGIN, authenticateUser),
  ]);
}

export default rootSaga;
