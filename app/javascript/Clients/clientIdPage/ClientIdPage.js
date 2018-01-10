import React from 'react';
import PropTypes from 'prop-types';
import ClientInformation from './ClientInformation';
import OtherClientInformation from './OtherClientInformation';
import SafetyAlertInformation from './SafetyAlertInformation';
import { GlobalHeader, PageHeader } from 'react-wood-duck';
import ClientIdSideBar from './ClientIdSideBar';
import Ethnicity from './Ethnicity';

export default class ClientIdPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(href, event) {
    event.stopPropagation();
  }

  render() {
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Child Name" button="" />
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <ClientIdSideBar handleSelect={this.handleSelect} />
            </div>
            <div className="col-sm-9">
              <ClientInformation anchorId="clientInformation" />
              <OtherClientInformation anchorId="otherCLientInformation" />
              <SafetyAlertInformation anchorId="safetyAlertInformation" />
              <Ethnicity anchorId="raceEthnicity" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ClientIdPage.propTypes = { children: PropTypes.any };
ClientIdPage.defaultProps = {};
