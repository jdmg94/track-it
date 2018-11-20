/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T15:57:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-13T21:28:27-06:00
 */
const packageBase = 'jdmg94/myShipments/Login';
const LOGIN = `${packageBase}/LOGIN`;
const LOGIN_FAIL = `${packageBase}/LOGIN_FAIL`;
const LOGIN_SUCCESS = `${packageBase}/LOGIN_SUCCESS`;

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case LOGIN:
    case LOGIN_FAIL:
    case LOGIN_SUCCESS: {
      const { isLoading: prevData } = state;
      const isLoading = !prevData;

      return { ...state, isLoading };
    }

    default: return state;
  }
};

const login = data => ({
  type: LOGIN,
  payload: { data },
});

const loginFail = error => ({
  payload: { error },
  type: LOGIN_FAIL,
});

const loginSuccess = user => ({
  payload: { user },
  type: LOGIN_SUCCESS,
});

export default reducer;
export {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  login,
  loginFail,
  loginSuccess,
};
