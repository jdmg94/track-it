/**
 * @Author: JoseMunoz
 * @Date:   2018-11-07T10:38:05-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-16T17:18:33-06:00
 */
import React from 'react';
import { NativeRouter } from 'react-router-native';
import TabNavigation from '../TabNavigation';
import MainRouter from '../MainRouter';

const Routes = <MainRouter />;

const App = () => (
  <NativeRouter>
    <TabNavigation
      tabs={[
        {
          link: '/home',
          title: 'Home',
          children: Routes,
          // icon: homeIcon,
        },
        {
          link: '/profile',
          title: 'Profile',
          children: Routes,
          // icon: profileIcon,
        },
      ]}
    />
  </NativeRouter>
);

export default App;
