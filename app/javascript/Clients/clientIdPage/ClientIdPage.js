import React from 'react';
import PropTypes from 'prop-types';
import ClientInformation from './ClientInformation';
import OtherClientInformation from './OtherClientInformation';
import {
  SideBar,
  GlobalHeader,
  Cards,
  PageHeader,
  NavLink,
  NavLinks,
} from 'react-wood-duck';

const navLinks = (
  <NavLinks>
    <NavLink text="Client Information" href="#ClientInformation" />
    <NavLink text="Safety Alert Information" href="#SafetyAlertInformation" />
    <NavLink text="Other Client Information" href="#Other CLient Information" />
    <NavLink text="Race & Ethinicity" href="#Race & Ethinicity" />
  </NavLinks>
);

export default class ClientIdPage extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Child Name" />
        <div className="container">
          <SideBar>{navLinks} </SideBar>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <ClientInformation />
          </div>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <OtherClientInformation />
          </div>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <Cards cardHeaderText="Safety Alert Information" />
          </div>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <Cards cardHeaderText="Race & Ethinicity" />
          </div>
        </div>
      </div>
    );
  }
}
ClientIdPage.propTypes = { children: PropTypes.any };
ClientIdPage.defaultProps = {};
