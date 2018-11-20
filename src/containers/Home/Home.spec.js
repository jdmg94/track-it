/**
 * @Author: JoseMunoz
 * @Date:   2018-11-09T09:39:30-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T21:25:53-06:00
 */
/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  it('should render without crashing', () => {
    const node = shallow(<Home />);

    expect(node).to.not.be.empty;
  });
});
