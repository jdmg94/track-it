/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T15:44:45-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-08T15:51:02-06:00
 */
const packageBase = 'jdmg94/myShipments/Profile';
const FETCH_USER = `${packageBase}/FETCH_USER`;
const FETCH_USER_FAIL = `${packageBase}/FETCH_USER_FAIL`;
const FETCH_USER_SUCCESS = `${packageBase}/FETCH_USER_SUCCESS`;

const initialState = {
  isFetching: false,
  data: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
    case FETCH_USER_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };
    }

    case FETCH_USER_SUCCESS: {
      const { data } = payload;
      const { isFetching } = initialState;

      return { ...state, data, isFetching };
    }

    default: return state;
  }
};

const fetchUser = id => ({
  payload: { id },
  type: FETCH_USER,
});

const fetchUserFail = error => ({
  payload: { error },
  type: FETCH_USER_FAIL,
});

const fetchUserSuccess = data => ({
  payload: { data },
  type: FETCH_USER_SUCCESS,
});

export default reducer;
export {
  FETCH_USER,
  FETCH_USER_FAIL,
  FETCH_USER_SUCCESS,
  fetchUser,
  fetchUserFail,
  fetchUserSuccess,
};
