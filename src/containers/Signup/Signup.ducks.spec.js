/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:42:31-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T19:01:31-06:00
 */
import { expect } from 'chai';
import reducer, {
  register,
  registerFail,
  registerSuccess,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from './Signup.ducks';

describe('containers/Signup.ducks', () => {
  describe('register', () => {
    it('should dispatch a REGISTER action with its payload', () => {
      const data = 'test123';
      const expectedResult = {
        type: REGISTER,
        payload: { data },
      };

      const actualResult = register(data);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('registerSuccess', () => {
    it('should dispatch a REGISTER_SUCCESS action with a user payload', () => {
      const user = 'success!!';
      const expectedResult = {
        payload: { user },
        type: REGISTER_SUCCESS,
      };

      const actualResult = registerSuccess(user);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('registerFail', () => {
    it('should dispatch a REGISTER_FAIL action with an error payload', () => {
      const error = 'oh no!';
      const expectedResult = {
        payload: { error },
        type: REGISTER_FAIL,
      };

      const actualResult = registerFail(error);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('reducer', () => {
    it('should set the loading state to true when REGISTER dispatches', () => {
      const initialState = {
        isLoading: false,
      };

      const expectedResult = {
        isLoading: true,
      };

      const action = {
        type: REGISTER,
      };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should set the loading state to false when REGISTER_SUCCESS dispatches', () => {
      const initialState = {
        isLoading: true,
      };

      const expectedResult = {
        isLoading: false,
      };

      const action = {
        type: REGISTER_SUCCESS,
      };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should set the loading state to false when REGISTER_FAIL dispatches', () => {
      const initialState = {
        isLoading: true,
      };

      const expectedResult = {
        isLoading: false,
      };

      const action = {
        type: REGISTER_FAIL,
      };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });
});
