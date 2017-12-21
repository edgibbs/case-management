import React from 'react';
import axios from 'axios';
import { GlobalHeader, PageHeader, Cards, Alert } from 'react-wood-duck';
import Caseload from '../_components/Caseload';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      caseload: {
        XHRStatus: 'waiting',
      },
    };
  }
  componentDidMount() {
    setTimeout(() => {
      axios
        .get('/api/cases/123/index')
        .then(res => {
          this.setState({
            ...this.state,
            caseload: {
              XHRStatus: 'ready',
              records: res.data,
            },
          });
        })
        .catch(e => {
          throw e;
        });
    }, 750);
  }
  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Dashboard" button={null} />
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <Caseload
                status={this.state.caseload.XHRStatus}
                cases={this.state.caseload.records}
                renderEmpty={() => (
                  <Alert
                    alertClassName="info"
                    alertMessage="Your caseload is empty!"
                    alertCross={null}
                    faIcon="fa-rocket"
                  />
                )}
              />
              <Cards cardHeaderText="Referrals" cardbgcolor="transparent" />
            </div>
            <div className="col-md-3">
              <div className="list-group double-gap-top card">
                <span className="list-group-item">
                  <span className="card-header">Quick Links</span>
                </span>
                <a href="/clients/show" className="list-group-item">
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
