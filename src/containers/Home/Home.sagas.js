/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:28:40-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-13T08:49:48-06:00
 */
import {
  all,
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { Auth, API, graphqlOperation } from 'aws-amplify';
import {
  fetchPackagesFail,
  fetchPackagesSuccess,
  FETCH_PACKAGES,
} from './Home.ducks';
import {
  getUser,
} from '../../graphql/queries';

const retrieveUserId = async () => {
  const { idToken } = await Auth.currentSession();

  return idToken;
};

const fetchTrackingsForUser = async id => {
  const queryOperation = graphqlOperation(getUser, { id });
  const { data } = await API.graphql(queryOperation);
  const { user } = data;

  return user.trackings;
};

function* retrievePackages() {
  try {
    const id = yield call(retrieveUserId);
    const data = yield call(fetchTrackingsForUser, id);

    yield put(fetchPackagesSuccess(data));
  } catch (error) {
    yield put(fetchPackagesFail(error));
  }
}

function* rootSaga() {
  yield all([
    takeLatest(FETCH_PACKAGES, retrievePackages),
  ]);
}

export default rootSaga;
export {
  retrievePackages,
};
