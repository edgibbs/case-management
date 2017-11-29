import React from 'react';
import PropTypes from 'prop-types';
import { SideNav, GlobalHeader, Cards, PageHeader } from 'react-wood-duck';

const sideNavContent = [
  {
    type: 'navLinks',
    navItems: [
      {
        type: 'navLink',
        text: 'Client Information',
        href: '#',
        preIcon: 'fa fa-user',
      },
      {
        type: 'navLink',
        text: 'Safety Alert Information',
        href: '#',
        preIcon: 'fa fa-user',
      },
      {
        type: 'navLink',
        text: 'Other Client Information',
        href: '#',
        preIcon: 'fa fa-user',
      },
      {
        type: 'navLink',
        text: 'Race & Ethinicity',
        href: '#',
        preIcon: 'fa fa-user',
      },
    ],
  },
];
const sideNavColumnWidth = 3;
export default class ClientIdPage extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Child Name" />
        <div className="container-fluid noPadding">
          <SideNav content={sideNavContent} columnWidth={sideNavColumnWidth}>
            {this.props.children}
          </SideNav>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <Cards cardHeaderText="Client Information" />
          </div>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <Cards cardHeaderText="Safety Alert Information" />
          </div>
          <div className="col-md-9 col-md-offset-3 col-xs-12">
            <Cards cardHeaderText="Other Client Information" />
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
