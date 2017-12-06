import React from 'react';
import { Cards, GlobalHeader, PageHeader } from 'react-wood-duck';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div id="landingPage">
        <GlobalHeader />
        <PageHeader pageTitle="Dashboard" />
        <Cards cardHeaderText="Caseload" />
        <Cards cardHeaderText="Client" />
        <Cards cardHeaderText="Quick Links">
          <div style={{ paddingTop: '1.5rem' }}>
            <a href="/clients/show"> Link To Client ID Page </a>
          </div>
        </Cards>
      </div>
    );
  }
}
