/**
 * @Author: JoseMunoz
 * @Date:   2018-11-07T14:54:07-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-09T11:26:59-06:00
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { List } from 'antd-mobile-rn';
import { Link } from 'react-router-native';
import { AntDesign as Icon } from '@expo/vector-icons';

const ListItem = ({ link, icon, children }) => (
  <List.Item>
    <Link to={link}>
      <Text
        style={{
          lineHeight: 65,
        }}
      >
        <Icon
          size={55}
          name={icon}
        />
        {children}
      </Text>
    </Link>
  </List.Item>
);

ListItem.propTypes = {
  icon: PropTypes.string,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

ListItem.defaultProps = {
  icon: '',
};

const Home = () => (
  <List>
    <ListItem
      icon="home"
      link="/home"
    >
      Home
    </ListItem>
    <ListItem
      icon="inbox"
      link="/package/test"
    >
      package
    </ListItem>
    <ListItem
      icon="user"
      link="/login"
    >
      Login
    </ListItem>
    <ListItem
      icon="user"
      link="/signup"
    >
      Signup
    </ListItem>
    <ListItem
      icon="user"
      link="/profile"
    >
      Profile
    </ListItem>
    <ListItem
      icon="inbox"
      link="/package/test/edit"
    >
      Package editor
    </ListItem>
    <ListItem
      icon="user"
      link="/profile/edit"
    >
      profile editor
    </ListItem>
  </List>
);

export default Home;
