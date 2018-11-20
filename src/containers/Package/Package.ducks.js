/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T15:28:36-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-08T15:43:48-06:00
 */
const packageBase = 'jdmg94/myShipments/Package';
const FETCH_PACKAGE = `${packageBase}/FETCH_PACKAGE`;
const FETCH_PACKAGE_FAIL = `${packageBase}/FETCH_PACKAGE_FAIL`;
const FETCH_PACKAGE_SUCCESS = `${packageBase}/FETCH_PACKAGE_SUCCESS`;

const initialState = {
  isFetching: false,
  data: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PACKAGE:
    case FETCH_PACKAGE_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };
    }

    case FETCH_PACKAGE_SUCCESS: {
      const { data } = payload;
      const { isFetching } = initialState;

      return { ...state, data, isFetching };
    }
    default: return state;
  }
};

const fetchPackage = id => ({
  payload: { id },
  type: FETCH_PACKAGE,
});

const fetchPackageFail = error => ({
  payload: { error },
  type: FETCH_PACKAGE_FAIL,
});

const fetchPackageSuccess = data => ({
  payload: { data },
  type: FETCH_PACKAGE_SUCCESS,
});

export default reducer;
export {
  FETCH_PACKAGE,
  FETCH_PACKAGE_FAIL,
  FETCH_PACKAGE_SUCCESS,
  fetchPackage,
  fetchPackageFail,
  fetchPackageSuccess,
};
