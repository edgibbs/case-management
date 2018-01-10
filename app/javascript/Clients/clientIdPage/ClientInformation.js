import React from 'react';
import PropTypes from 'prop-types';
import {
  DropDownField,
  InputComponent,
  Cards,
  DateTimePicker,
  CheckboxRadioGroup,
} from 'react-wood-duck';
import Table from '../../_components/Table';

const gender = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];
const marital = [
  { value: 'Married', label: 'Married' },
  { value: 'Never Married', label: 'Never Married' },
  { value: 'Widowed', label: 'Widowed' },
  { value: 'Divorced', label: 'Divorced' },
];
const ageUnit = [
  { value: '1 year', label: '1 year' },
  { value: '2 years', label: '2 years' },
  { value: '3 years', label: '3 years' },
];
const stateTypes = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' },
];
const nameType = [
  { value: 'Primary', label: 'Primary' },
  { value: 'Secondary', label: 'Secondary' },
];

export default class ClientInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      value: '',
      client: ['Client is a Minor/NMD parent'],
      clients: [' Client is a Safely surrendered baby'],
      warranty: ['Outstanding warranty exists'],
      confidentiality: [' Confidentiality in effect'],
      csec: ['This case involves CSEC Data'],
      selected: [],
      nameTypeValue: '',
      maritalValue: '',
      ageUnitValue: '',
      StateTypesValue: '',
      genderValue: '',
      csecBlock: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }
  handleChange(event) {
    const newSelection = event.target.value;
    let newSelectionArray;
    if (this.state.selected.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.selected.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.selected, newSelection];
    }
    this.setState({ selected: newSelectionArray });
    if (
      event.target.value === 'This case involves CSEC Data' &&
      event.target.checked
    ) {
      this.setState({ csecBlock: true });
    } else {
      this.setState({ csecBlock: false });
    }
  }
  handleDropdownChange(name) {
    return ({ value }) => this.setState({ [name]: value });
  }

  render() {
    return (
      <Cards
        cardHeaderText="Client Information"
        id={this.props.anchorId}
        cardHeaderButton={false}
        cardActionButtons={true}
      >
        <div>
          <InputComponent
            gridClassName="col-md-1 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Prefix"
            type="string"
            placeholder="Mr. Mrs. "
          />
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="First Name (required)"
            type="string"
            placeholder="Eg: Peter"
          />
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Middle Name"
            type="string"
            placeholder="Eg: John"
          />
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Last Name (required)"
            type="string"
            placeholder="Eg: Lauren"
          />
          <InputComponent
            gridClassName="col-md-2 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Suffix"
            type="string"
            placeholder="Junior/Senior"
          />
        </div>
        <div>
          <DropDownField
            id="dropdown1"
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            selectedOption={this.state.nameTypeValue}
            options={nameType}
            label="Name Type (required)"
            onChange={this.handleDropdownChange('nameTypeValue')}
          />
          <DropDownField
            id="dropdown2"
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            selectedOption={this.state.maritalValue}
            options={marital}
            label="Marital Status"
            onChange={this.handleDropdownChange('maritalValue')}
          />
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="SSN"
            type="number"
            placeholder="Eg: 121-234-3443"
          />
          <InputComponent
            label="Client Index Numnber"
            gridClassName="col-md-3 col-sm-3 col-xs-3"
            fieldClassName="form-group"
            type="number"
            placeholder="Eg: 1234"
          />
        </div>
        <div className="row">
          <div>
            <DropDownField
              id="dropdown3"
              name="Find Placement Dropdown"
              gridClassName="col-md-3 col-sm-6 col-xs-12"
              selectedOption={this.state.genderValue}
              options={gender}
              label="Gender"
              onChange={this.handleDropdownChange('genderValue')}
            />
          </div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            <label htmlFor="Date Of Birth">DATE OF BIRTH</label>
            <DateTimePicker />
          </div>
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Age"
            type="number"
          />
          <DropDownField
            id="dropdown4"
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            selectedOption={this.state.ageUnitValue}
            options={ageUnit}
            label="Age Unit"
            onChange={this.handleDropdownChange('ageUnitValue')}
          />
        </div>
        <div className="row">
          <div>
            <InputComponent
              gridClassName="col-md-3 col-sm-6 col-xs-12"
              fieldClassName="form-group"
              label="Client Number"
              type="number"
            />
          </div>
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Alien Registration#"
            type="number"
          />
          <DropDownField
            id="dropdown5"
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            selectedOption={this.state.StateTypesValue}
            options={stateTypes}
            label="Drivers License State"
            onChange={this.handleDropdownChange('StateTypesValue')}
          />
          <InputComponent
            gridClassName="col-md-3 col-sm-6 col-xs-12"
            fieldClassName="form-group"
            label="Drivers License # "
            type="number"
          />
        </div>
        <div className="form-group row">
          <div className="col-md-6">
            <CheckboxRadioGroup
              id="checkbox1"
              name={'child'}
              type={'checkbox'}
              handleOnChange={this.handleChange}
              options={this.state.client}
              selectedOptions={this.state.selected}
            />
          </div>
          <div className="col-md-6">
            <CheckboxRadioGroup
              id="checkbox2"
              name={'client'}
              type={'checkbox'}
              handleOnChange={this.handleChange}
              options={this.state.clients}
              selectedOptions={this.state.selected}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <CheckboxRadioGroup
              id="checkbox3"
              name={'Warranty'}
              type={'checkbox'}
              handleOnChange={this.handleChange}
              options={this.state.warranty}
              selectedOptions={this.state.selected}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-4">
            <label htmlFor="CONFIDENTIALITY">CONFIDENTIALITY</label>
            <CheckboxRadioGroup
              id="checkbox4"
              name={'confidentiality'}
              type={'checkbox'}
              handleOnChange={this.handleChange}
              options={this.state.confidentiality}
              selectedOptions={this.state.selected}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="CONFIDENTIALITY EFFECTIVE DATE">
              CONFIDENTIALITY EFFECTIVE DATE
            </label>
            <DateTimePicker />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12">
            <CheckboxRadioGroup
              id="checkbox5"
              name={'csec'}
              type={'checkbox'}
              handleOnChange={this.handleChange}
              options={this.state.csec}
              selectedOptions={this.state.selected}
            />
          </div>
        </div>
        {this.state.csecBlock && (
          <div>
            <Table colNames={['CSEC Type', 'Start Date', 'End Date']} />
            <div>
              <DropDownField
                id="dropdown6"
                gridClassName="col-md-4 col-sm-6 col-xs-12"
                selectedOption={this.state.StateTypesValue}
                options={stateTypes}
                label="CSEC Data Type"
                onChange={this.handleDropdownChange('StateTypesValue')}
              />
              <div className="col-md-4 col-sm-6 col-xs-12">
                <label htmlFor="START DATE">START DATE</label>
                <DateTimePicker />
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <label htmlFor="END DATE">END DATE</label>
                <DateTimePicker fieldClassName="form-group" />
              </div>
            </div>
          </div>
        )}
      </Cards>
    );
  }
}
ClientInformation.propTypes = {
  anchorId: PropTypes.string,
};
