import React from 'react';
import {
  Cards,
  Table,
  DropDownField,
  DateTimePicker,
  TextArea,
  Button,
} from 'react-wood-duck';

const activationinCounty = [
  { value: 'Los Angeles County', label: 'Los Angeles County' },
  { value: 'Sacramento County', label: 'Sacramento County' },
  { value: 'El Dorado County', label: 'El Dorado County' },
  { value: 'Yuba County', label: 'Yuba County' },
  { value: 'Merced County', label: 'Merced County' },
];
const deactivationinCounty = [
  { value: 'Los Angeles County', label: 'Los Angeles County' },
  { value: 'Sacramento County', label: 'Sacramento County' },
  { value: 'El Dorado County', label: 'El Dorado County' },
  { value: 'Yuba County', label: 'Yuba County' },
  { value: 'Merced County', label: 'Merced County' },
];
const reasons = [
  { value: 'Carrying Guns in Home', label: 'Carrying Guns in Home' },
  { value: 'Dangerous Environment', label: 'Dangerous Environment' },
];

export default class SafetyAlertInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      county: '',
      reasons: '',
      explanation: '',
      deactive: '',
    };
    this.onChange = this.onChange.bind(this);
    this.handleExplanationChange = this.handleExplanationChange.bind(this);
    this.onChangeDeactive = this.onChangeDeactive.bind(this);
  }

  onChange(name) {
    return ({ value }) => this.setState({ [name]: value });
  }
  handleExplanationChange(e) {
    this.setState({ explanation: e.target.value });
  }

  onChangeDeactive(e) {
    this.setState({ deactive: e.target.value });
  }

  render() {
    return (
      <div>
        <Cards cardHeaderText="Safety Alert Information">
          <div className="row">
            <label
              htmlFor="There are no safety alerts recorded at this point of time"
              className="col-md-8 col-sm-6 col-xs-12"
            >
              There are no safety alerts recorded at this point of time
            </label>
            <Button btnClassName="default pull-right" btnName="Add Alert" />
          </div>
          <Table />
          <label htmlFor="Safety Alert Activation">
            Safety Alert Activation
          </label>
          <div>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <label htmlFor="Activation Date">Activation Date</label>
              <DateTimePicker />
            </div>
            <DropDownField
              id="dropdown1"
              gridClassName="col-md-4 col-sm-6 col-xs-12"
              selectedOption={this.state.activationinCounty}
              options={activationinCounty}
              label="County"
              onChange={this.onChange('activationinCounty')}
            />
            <DropDownField
              id="dropdown1"
              gridClassName="col-md-4 col-sm-6 col-xs-12"
              selectedOption={this.state.reasons}
              options={reasons}
              label="Reason"
              onChange={this.onChange('reasons')}
            />
            <TextArea
              gridClassName="col-md-12 col-sm-12 col-xs-12"
              labelClassName="form-control"
              label="Explanation"
              rows={5}
              resize={false}
              value={this.state.explanation}
              name={'Explanation'}
              handleOnChange={this.handleExplanationChange}
              placeholder={''}
            />
          </div>
          <div> </div>
          <div className="row">
            <label
              htmlFor="Safety Alert Deactivation"
              className="col-md-12 col-sm-6 col-xs-12"
            >
              Safety Alert Deactivation
            </label>
            <div className="col-md-4 col-sm-6 col-xs-12">
              <label htmlFor="Deactivation Date">Deactivation Date</label>
              <DateTimePicker />
            </div>
            <DropDownField
              id="dropdown1"
              gridClassName="col-md-4 col-sm-6 col-xs-12"
              selectedOption={this.state.deactivationinCounty}
              options={deactivationinCounty}
              label="County"
              onChange={this.onChange('deactivationinCounty')}
            />
            <TextArea
              gridClassName="col-md-12 col-sm-12 col-xs-12"
              labelClassName="form-control"
              label="Explanation"
              rows={5}
              resize={false}
              value={this.state.deactive}
              name={'Explanation'}
              handleOnChange={this.onChangeDeactive}
              placeholder={''}
            />
          </div>
        </Cards>
      </div>
    );
  }
}
