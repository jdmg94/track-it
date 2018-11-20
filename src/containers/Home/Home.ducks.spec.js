/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:39:11-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-10T16:19:11-06:00
 */
import { expect } from 'chai';
import reducer, {
  fetchPackages,
  fetchPackagesFail,
  fetchPackagesSuccess,
  FETCH_PACKAGES,
  FETCH_PACKAGES_FAIL,
  FETCH_PACKAGES_SUCCESS,
} from './Home.ducks';

describe('Home.ducks', () => {
  describe('fetchPackages', () => {
    it('should return FETCH_PACKAGES action', () => {
      const expectedResult = { type: FETCH_PACKAGES };

      expect(fetchPackages()).to.deep.equal(expectedResult);
    });
  });

  describe('fetchPackagesFail', () => {
    it('should return a FETCH_PACKAGES_FAIL action with an error', () => {
      const error = 'oh no!';
      const expectedResult = {
        payload: { error },
        type: FETCH_PACKAGES_FAIL,
      };

      expect(fetchPackagesFail(error)).to.deep.equal(expectedResult);
    });
  });

  describe('fetchPackagesSuccess', () => {
    it('should return a FETCH_PACKAGES_SUCCESS action with its payload', () => {
      const data = { foo: 'bar' };
      const expectedResult = {
        type: FETCH_PACKAGES_SUCCESS,
        payload: { data },
      };

      expect(fetchPackagesSuccess(data)).to.deep.equal(expectedResult);
    });
  });

  describe('reducer', () => {
    it('should set the isFetching flag to true then fetching starts', () => {
      const action = { type: FETCH_PACKAGES };
      const initialState = { isFetching: false };
      const expectedResult = { isFetching: true };
      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
      expect(actualResult).property('isFetching').to.equal(true);
    });

    it('should update the isFetching flag when fetching fails', () => {
      const error = 'oh no!';
      const initialState = { isFetching: true };
      const expectedResult = { isFetching: false };
      const action = {
        payload: { error },
        type: FETCH_PACKAGES_FAIL,
      };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
      expect(actualResult).to.not.have.property('error');
      expect(actualResult).property('isFetching').to.equal(false);
    });

    it('should update the isFetching flag and set the data on success', () => {
      const data = { foo: 'bar' };
      const initialState = { isFetching: true };
      const expectedResult = { isFetching: false, data };
      const action = {
        type: FETCH_PACKAGES_SUCCESS,
        payload: { data },
      };

      const actualResult = reducer(initialState, action);

      expect(actualResult).to.deep.equal(expectedResult);
      expect(actualResult).to.have.property('data').to.be.an('object');
      expect(actualResult).property('isFetching').to.equal(false);
    });
  });
});
