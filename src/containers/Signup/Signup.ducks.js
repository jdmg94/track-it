/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:18:10-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T19:00:54-06:00
 */
const moduleBase = 'jdmg94/myShipments/Signup';
const REGISTER = `${moduleBase}/REGISTER`;
const REGISTER_FAIL = `${moduleBase}/REGISTER_FAIL`;
const REGISTER_SUCCESS = `${moduleBase}/REGISTER_SUCCESS`;

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case REGISTER:
    case REGISTER_FAIL:
    case REGISTER_SUCCESS: {
      const { isLoading: prevState } = state;
      const isLoading = !prevState;

      return { ...state, isLoading };
    }
    default: return state;
  }
};

const register = data => ({
  payload: { data },
  type: REGISTER,
});

const registerFail = error => ({
  payload: { error },
  type: REGISTER_FAIL,
});

const registerSuccess = user => ({
  payload: { user },
  type: REGISTER_SUCCESS,
});

export default reducer;
export {
  register,
  registerFail,
  registerSuccess,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
};
