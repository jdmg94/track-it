/**
 * @Author: JoseMunoz
 * @Date:   2018-11-07T14:24:13-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-19T18:57:44-06:00
 */
import hat from 'hat';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TabBar } from 'antd-mobile-rn';
import { withRouter } from 'react-router-native';

const defaultTab = '/home';
const TabNavigation = ({ history, tabs }) => {
  const { pathname } = history.location;
  const [
    selectedTab, setTab,
  ] = useState(pathname);

  const navigateTo = view => () => {
    history.push(view);
    setTab(view);
  };

  const isActive = link => (
    (link === selectedTab)
    || (link === defaultTab)
    || link.startsWith('profile')
  );

  return (
    <TabBar
      tintColor="black"
      selectedTab={selectedTab}
    >
      {
        tabs.map(({ link, ...props }) => (
          <TabBar.Item
            {...props}
            key={`tab-index-${hat()}`}
            selected={isActive(link)}
            onPress={navigateTo(link)}
          />
        ))
      }
    </TabBar>
  );
};

TabNavigation.propTypes = {
  history: PropTypes.shape({})
    .isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
    content: PropTypes.node,
  })).isRequired,
};

export default withRouter(TabNavigation);
