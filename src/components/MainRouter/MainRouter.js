/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T12:15:35-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-09T11:50:08-06:00
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-native';

import store from '../../containers/store';

import Home from '../../containers/Home';
import Login from '../../containers/Login';
import Signup from '../../containers/Signup';
import Package from '../../containers/Package';
import Profile from '../../containers/Profile';
import ProfileEditor from '../../containers/ProfileEditor';
import PackageEditor from '../../containers/PackageEditor';

const MainRouter = () => (
  <Provider store={store}>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/package/:id" component={Package} />
      <Route exact path="/profile/edit" component={ProfileEditor} />
      <Route exact path="/package/:id/edit" component={PackageEditor} />
      <Route component={Home} />
    </Switch>
  </Provider>
);

export default MainRouter;
