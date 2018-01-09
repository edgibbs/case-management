import React from 'react';
import PropTypes from 'prop-types';
import ClientInformation from './ClientInformation';
import OtherClientInformation from './OtherClientInformation';
import SafetyAlertInformation from './SafetyAlertInformation';
import Ethnicity from './Ethnicity';
import {
  SideBar,
  GlobalHeader,
  PageHeader,
  NavLink,
  NavLinks,
} from 'react-wood-duck';

export default class ClientIdPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: '',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidUpdate() {
    if (this[this.state.selectedNav]) {
      this[this.state.selectedNav].scrollIntoView();
    }
    window.scrollBy(0, -65);
  }

  handleSelect(href, event) {
    this.setState({ selectedNav: href });
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    const navLinks = (
      <NavLinks>
        <NavLink
          key={1}
          text="Client Information"
          href="clientInformation"
          clickHandler={this.handleSelect}
        />
        <NavLink
          key={3}
          text="Other Client Information"
          href="otherCLientInformation"
          clickHandler={this.handleSelect}
        />
        <NavLink
          key={2}
          text="Safety Alert Information"
          href="safetyAlertInformation"
          clickHandler={this.handleSelect}
        />
        <NavLink
          key={4}
          text="Race & Ethinicity"
          href="raceEthinicity"
          clickHandler={this.handleSelect}
        />
      </NavLinks>
    );
    return (
      <div>
        <GlobalHeader />
        <PageHeader pageTitle="Child Name" button="" />
        <div className="container">
          <div className="row">
            <SideBar columnWidth={3}>{navLinks} </SideBar>
            <div
              ref={ref => {
                this.clientInformation = ref;
              }}
              className="col-md-9 col-md-offset-3 col-xs-12"
            >
              <ClientInformation />
            </div>
            <div
              ref={ref => {
                this.otherCLientInformation = ref;
              }}
              className="col-md-9 col-md-offset-3 col-xs-12"
            >
              <OtherClientInformation />
            </div>
            <div
              ref={ref => {
                this.safetyAlertInformation = ref;
              }}
              className="col-md-9 col-md-offset-3 col-xs-12"
            >
              <SafetyAlertInformation />
            </div>
            <div
              ref={ref => {
                this.raceEthinicity = ref;
              }}
              className="col-md-9 col-md-offset-3 col-xs-12"
            >
              <Ethnicity />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
ClientIdPage.propTypes = { children: PropTypes.any };
ClientIdPage.defaultProps = {};
