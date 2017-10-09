import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Hello = ({name}) => (
  <div>Hello {name}!</div>
);

Hello.defaultProps = {
  name: 'unknown person'
};

Hello.propTypes = {
  name: PropTypes.string
};

export default Hello;
