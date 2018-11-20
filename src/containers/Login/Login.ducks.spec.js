/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:40:03-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-13T21:38:59-06:00
 */
import { expect } from 'chai';
import reducer, {
  login,
  loginFail,
  loginSuccess,
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
} from './Login.ducks';

describe('containers/Login.ducks', () => {
  describe('login', () => {
    it('should return a LOGIN action with a data payload', () => {
      const data = 'Lorem Ipsum Dolor';
      const expectedResult = {
        type: LOGIN,
        payload: { data },
      };

      const actualResult = login(data);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('loginFail', () => {
    it('should return a LOGIN_FAIL action with an error payload', () => {
      const error = 'oh no!';
      const expectedResult = {
        type: LOGIN_FAIL,
        payload: { error },
      };

      const actualResult = loginFail(error);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('loginSuccess', () => {
    it('should return a LOGIN_SUCCESS action with a user payload', () => {
      const user = 'I should be a user object!';
      const expectedResult = {
        payload: { user },
        type: LOGIN_SUCCESS,
      };

      const actualResult = loginSuccess(user);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });

  describe('reducer', () => {
    it('should set the loading state to true when a LOGIN action is called', () => {
      const initialState = { isLoading: false };
      const expectedResult = { isLoading: true };
      const action = { type: LOGIN };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should set the loading state to false when a LOGIN_FAIL action is called', () => {
      const action = { type: LOGIN_FAIL };
      const initialState = { isLoading: true };
      const expectedResult = { isLoading: false };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should set the loading state to false when a LOGIN_SUCCESS action is called', () => {
      const action = { type: LOGIN_SUCCESS };
      const initialState = { isLoading: true };
      const expectedResult = { isLoading: false };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
    });
  });
});
