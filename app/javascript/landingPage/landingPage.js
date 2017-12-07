import React from 'react';
import { Cards, GlobalHeader, PageHeader } from 'react-wood-duck';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Dashboard" button={null} />
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Cards cardHeaderText="Cases" />
              <Cards cardHeaderText="Referrals" />
              <Cards cardHeaderText="Quick Links">
                <div style={{ paddingTop: '1.5rem' }}>
                  <a href="/clients/show"> Link To Client ID Page </a>
                </div>
              </Cards>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
