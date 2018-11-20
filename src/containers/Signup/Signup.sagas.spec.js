/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:42:41-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T21:56:45-06:00
 */
/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { Auth } from 'aws-amplify';
import sinon from 'sinon';
import {
  put,
  call,
} from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';
import {
  registerFail,
  registerSuccess,
} from './Signup.ducks';
import {
  registerUser,
} from './Signup.sagas';


const sandbox = sinon.createSandbox();
const ERROR_STUB = 'oh no!';
const EMAIL_STUB = 'test@test.com';
const USER_FIXTURE = {
  email: EMAIL_STUB,
};

const action = {
  payload: {
    data: USER_FIXTURE,
  },
};

describe('containers/Signup.sagas', () => {
  describe('registerUser', () => {
    afterEach(() => {
      sandbox.restore();
    });

    const generator = cloneableGenerator(registerUser)(action);
    it('should call registerFail on exceptions', () => {
      const clone = generator.clone();
      const expectedResult = put(registerFail(ERROR_STUB));
      const stub = sandbox.stub(Auth, 'signUp').rejects(ERROR_STUB);
      const {
        done,
        value: actualResult,
      } = clone.next(USER_FIXTURE);

      expect(done).to.be.false;
      expect(stub.calledOnce).to.be.false;
      expect(actualResult).to.not.be.null;
      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should call the AppSync service to register a user', () => {
      const {
        done,
        value: actualResult,
      } = generator.next(USER_FIXTURE);

      const stub = sandbox.stub(Auth, 'signUp').resolves({
        user: USER_FIXTURE,
      });

      const expectedResult = call(Auth.signUp, USER_FIXTURE);

      expect(done).to.be.false;
      expect(stub.calledOnce).to.be.true;
      expect(actualResult).to.not.be.null;
      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should call registerSuccess when appsync returns a valid response', () => {
      const {
        done,
        value: actualResult,
      } = generator.next(USER_FIXTURE);
      const expectedResult = put(registerSuccess(USER_FIXTURE));

      expect(done).to.be.false;
      expect(actualResult).to.not.be.null;
      expect(actualResult).to.deep.equal(expectedResult);
    });

    it('should be done', () => {
      const { done } = generator.next();

      expect(done).to.be.true;
    });
  });
});
