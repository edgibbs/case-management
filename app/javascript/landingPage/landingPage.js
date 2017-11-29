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
      </div>
    );
  }
}
