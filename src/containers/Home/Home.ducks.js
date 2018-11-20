/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T15:30:11-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-08T15:37:17-06:00
 */
const packageBase = 'jdmg94/myShipments/Home';
const FETCH_PACKAGES = `${packageBase}/FETCH_PACKAGES`;
const FETCH_PACKAGES_FAIL = `${packageBase}/FETCH_PACKAGES_FAIL`;
const FETCH_PACKAGES_SUCCESS = `${packageBase}/FETCH_PACKAGES_SUCCESS`;

const initialState = {
  isFetching: false,
  data: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PACKAGES:
    case FETCH_PACKAGES_FAIL: {
      const { isFetching: prevData } = state;
      const isFetching = !prevData;

      return { ...state, isFetching };
    }

    case FETCH_PACKAGES_SUCCESS: {
      const { data } = payload;
      const { isFetching } = initialState;

      return { ...state, data, isFetching };
    }

    default: return state;
  }
};

const fetchPackages = () => ({ type: FETCH_PACKAGES });
const fetchPackagesFail = error => ({
  payload: { error },
  type: FETCH_PACKAGES_FAIL,
});
const fetchPackagesSuccess = data => ({
  payload: { data },
  type: FETCH_PACKAGES_SUCCESS,
});

export default reducer;
export {
  fetchPackages,
  fetchPackagesFail,
  fetchPackagesSuccess,
  FETCH_PACKAGES,
  FETCH_PACKAGES_FAIL,
  FETCH_PACKAGES_SUCCESS,
};
