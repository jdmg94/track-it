/**
 * @Author: JoseMunoz
 * @Date:   2018-11-08T12:12:10-06:00
 * @Last modified by:   JoseMunoz
 * @Last modified time: 2018-11-11T20:36:17-06:00
 */
import React from 'react';
import PropTypes from 'prop-types';
import NotImplemented from '../../components/NotImplemented';

const Package = ({ match }) => (
  <NotImplemented
    icon="mail"
    title={`Package: ${match.params.id}`}
  />
);

Package.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Package;
