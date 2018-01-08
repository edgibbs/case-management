import React from 'react';
import { GlobalHeader, PageHeader } from 'react-wood-duck';
import { DataGridCard } from '../_components';
import CaseService from '../_services/case';
import ReferralService from '../_services/referral';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: { XHRStatus: 'idle' },
      referrals: { XHRStatus: 'idle' },
    };
  }

  componentDidMount() {
    this.fetchCases();
    this.fetchReferrals();
  }

  fetchReferrals = () => {
    this.setState({ referrals: { XHRStatus: 'waiting' } });
    return ReferralService.fetch()
      .then(referrals =>
        this.setState({
          referrals: {
            XHRStatus: 'ready',
            records: referrals,
          },
        })
      )
      .catch(() => this.setState({ referrals: { XHRStatus: 'error' } }));
  };

  fetchCases = () => {
    this.setState({ cases: { XHRStatus: 'waiting' } });
    return CaseService.fetch()
      .then(cases =>
        this.setState({
          cases: {
            XHRStatus: 'ready',
            records: cases,
          },
        })
      )
      .catch(() => this.setState({ cases: { XHRStatus: 'error' } }));
  };

  renderCases = () => {
    return (
      <DataGridCard
        cardHeaderText={getCardHeaderText(this.state.cases, 'Cases')}
        status={this.state.cases.XHRStatus}
        columns={['Name', 'Service Component', 'Assignment Type']}
        rows={
          this.state.cases.records &&
          this.state.cases.records.map(record => [
            record.case_name,
            record.active_service_component,
            record.assignment_type,
          ])
        }
      />
    );
  };

  renderReferrals = () => {
    return (
      <DataGridCard
        cardHeaderText={getCardHeaderText(this.state.referrals, 'Referrals')}
        status={this.state.referrals.XHRStatus}
        columns={['Name', 'Response Time', 'Assignment Type', 'Received Date']}
        rows={
          this.state.referrals.records &&
          this.state.referrals.records.map(record => [
            record.referral_name,
            record.referral_response_type,
            record.assignment_type,
            record.received_date,
          ])
        }
      />
    );
  };

  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Dashboard" button={null} />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              {this.renderCases()}
              {this.renderReferrals()}
            </div>
            <div className="col-md-3">
              <div className="list-group double-gap-top card">
                <span className="list-group-item">
                  <span className="card-header">Quick Links</span>
                </span>
                <a href="/clients/index" className="list-group-item">
                  Client ID Page
                </a>
                <a href="/family_finding/index" className="list-group-item">
                  Network Finding Tool
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardContainer;

function getCardHeaderText({ XHRStatus, records }, text) {
  return XHRStatus === 'ready' && records && records.length
    ? `${text} (${records.length})`
    : text;
}
