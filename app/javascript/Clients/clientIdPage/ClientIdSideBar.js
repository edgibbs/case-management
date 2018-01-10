import React from 'react';
import PropTypes from 'prop-types';
import { SideBar, NavLink, NavLinks } from 'react-wood-duck';

export default class ClientIdSidebar extends React.Component {
  render() {
    const navLinks = (
      <NavLinks>
        <NavLink
          key={1}
          text="Client Information"
          href="#clientInformation"
          clickHandler={this.props.handleSelect}
        />
        <NavLink
          key={3}
          text="Other Client Information"
          href="#otherCLientInformation"
          clickHandler={this.props.handleSelect}
        />
        <NavLink
          key={2}
          text="Safety Alert Information"
          href="#safetyAlertInformation"
          clickHandler={this.props.handleSelect}
        />
        <NavLink
          key={4}
          text="Race & Ethinicity"
          href="#raceEthnicity"
          clickHandler={this.props.handleSelect}
        />
      </NavLinks>
    );
    return <SideBar>{navLinks}</SideBar>;
  }
}
ClientIdSidebar.propTypes = {
  children: PropTypes.any,
  handleSelect: PropTypes.func,
};
