/**
 * @Author: JoseMunoz
 * @Date:   2018-11-11T20:17:19-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-12T08:35:42-06:00
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Result } from 'antd-mobile-rn';
import { withRouter } from 'react-router-native';
import { AntDesign as Icon } from '@expo/vector-icons';

const NotImplemented = ({
  title, message, icon, history,
}) => (
  <Result
    title={title}
    message={message}
    buttonText="Go Home"
    buttonType="primary"
    onButtonClick={() => {
      history.replace('/');
    }}
    img={(
      <Icon
        size={128}
        name={icon}
        color="black"
      />
    )}
  />
);

NotImplemented.propTypes = {
  message: PropTypes.string,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

NotImplemented.defaultProps = {
  message: 'Not Implemented Yet',
};

export default withRouter(NotImplemented);
