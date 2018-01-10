import React from 'react';
import PropTypes from 'prop-types';
import { DropDownField, Cards, CheckboxRadioGroup } from 'react-wood-duck';

const primaryLanguage = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'Chinese', label: 'Chinese' },
];
const secondaryLanguage = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'Chinese', label: 'Chinese' },
  { value: 'Hindi', label: 'Hindi' },
  { value: 'French', label: 'French' },
];

export default class OtherClientInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      value: '',
      spokenIn: ['Yes', 'No'],
      spokenInHome: ['Yes', 'No'],
      literate: ['Yes', 'No', 'Unknown', 'Not Applicable'],
      incapacitatedParent: ['Yes', 'No', 'Unknown', 'Not Applicable'],
      selected: [],
      primaryLanguage: '',
      secondaryLamguage: '',
      spokenInSelection: [],
      literateSelection: [],
      incapacitatedParentSelection: [],
    };
    this.handleSpokenChange = this.handleSpokenChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleSpokenInChange = this.handleSpokenInChange.bind(this);
    this.handleLiterateChange = this.handleLiterateChange.bind(this);
    this.handleIncapacitated = this.handleIncapacitated.bind(this);
  }

  handleSpokenChange(event) {
    this.setState({ selected: [event.target.value] });
  }
  handleSpokenInChange(event) {
    this.setState({ spokenInSelection: [event.target.value] });
  }
  handleLiterateChange(event) {
    this.setState({ literateSelection: [event.target.value] });
  }
  handleIncapacitated(event) {
    this.setState({ incapacitatedParentSelection: [event.target.value] });
  }
  handleDropdownChange(name) {
    return ({ value }) => this.setState({ [name]: value });
  }

  render() {
    return (
      <Cards
        cardHeaderText="Other Client Information"
        id={this.props.anchorId}
        cardHeaderButton={false}
        cardActionButtons={true}
      >
        <div>
          <div>
            <DropDownField
              id="dropdown1"
              gridClassName="col-md-6 col-sm-6 col-xs-12"
              selectedOption={this.state.primaryLanguage}
              options={primaryLanguage}
              label="Primary Language"
              onChange={this.handleDropdownChange('primaryLanguage')}
            />
            <DropDownField
              id="dropdown2"
              gridClassName="col-md-6 col-sm-6 col-xs-12"
              selectedOption={this.state.secondaryLanguage}
              options={secondaryLanguage}
              label="Secondary Language"
              onChange={this.handleDropdownChange('secondaryLanguage')}
            />
          </div>
          <div className="col-md-6 ">
            <label htmlFor="Spoken in Home">Spoken in Home</label>
            <CheckboxRadioGroup
              id="radio1"
              name={'spokenIn'}
              type={'radio'}
              options={this.state.spokenIn}
              handleOnChange={this.handleSpokenChange}
              selectedOptions={this.state.selected}
            />
          </div>
          <div className="col-md-6 ">
            <label htmlFor="Spoken in Home">Spoken in Home</label>
            <CheckboxRadioGroup
              id="radio2"
              name={'spokenInHome'}
              type={'radio'}
              options={this.state.spokenInHome}
              handleOnChange={this.handleSpokenInChange}
              selectedOptions={this.state.spokenInSelection}
            />
          </div>
          <div className="col-md-6 ">
            <label htmlFor="Literate">Literate</label>
            <CheckboxRadioGroup
              id="radio3"
              name={'literate'}
              type={'radio'}
              options={this.state.literate}
              handleOnChange={this.handleLiterateChange}
              selectedOptions={this.state.literateSelection}
            />
          </div>
          <div className="col-md-6 ">
            <label htmlFor="Incapacitated Parent">Incapacitated Parent</label>
            <CheckboxRadioGroup
              id="radio4"
              name={'incapacitatedParent'}
              type={'radio'}
              options={this.state.incapacitatedParent}
              handleOnChange={this.handleIncapacitated}
              selectedOptions={this.state.incapacitatedParentSelection}
            />
          </div>
        </div>
      </Cards>
    );
  }
}

OtherClientInformation.propTypes = {
  anchorId: PropTypes.string,
};
