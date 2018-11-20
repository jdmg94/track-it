/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:39:22-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T21:32:27-06:00
 */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import {
  retrievePackages,
} from './Home.sagas';

describe('Home.sagas', () => {
  let generator = null;
  describe('retrievePackages', () => {
    generator = retrievePackages();
    it('should fetch data for the active user', () => {
      const actualResult = generator.next();

      expect(actualResult).to.not.be.empty;
    });
  });
});
