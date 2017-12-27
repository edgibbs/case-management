import React from 'react';
import { shallow } from 'enzyme';
import SafetyAlertInformation from './SafetyAlertInformation.js';

describe('Safety Alert Information', () => {
  let safetyAlert;
  beforeEach(() => {
    safetyAlert = shallow(<SafetyAlertInformation />);
  });

  it('renders a Cards, DropDownFields and CheckboxRadioGroup', () => {
    expect(safetyAlert.find('Cards').length).toBeGreaterThan(0);
  });

  it('should render the Button component', () => {
    expect(safetyAlert.find('Button').length).toEqual(1);
  });

  it('should render the table component', () => {
    expect(safetyAlert.find('Table').length).toEqual(1);
  });

  it('should render the dropdown fields', () => {
    expect(safetyAlert.find('DropDownField').length).toEqual(3);
  });

  it('should render the DatePicker components', () => {
    expect(safetyAlert.find('DateTimePicker').length).toEqual(2);
  });

  it('should render the TextArea fields', () => {
    expect(safetyAlert.find('TextArea').length).toEqual(2);
  });

  it('should an event handler that sets state', () => {
    const instance = safetyAlert.instance();
    const myFunction = instance.onChange('myKey');
    expect(() => {
      myFunction({ value: 'myVal' });
    }).not.toThrow();
    expect(instance.state.myKey).toEqual('myVal');
  });

  it('should manage the explanation change', () => {
    const instance = safetyAlert.instance();
    instance.handleExplanationChange({
      target: { value: 'Not Safe environment' },
    });
    expect(instance.state.explanation).toBe('Not Safe environment');
  });

  it('should manage the Deactive change', () => {
    const instance = safetyAlert.instance();
    instance.onChangeDeactive({
      target: { value: 'Carry Guns in Home' },
    });
    expect(instance.state.deactive).toBe('Carry Guns in Home');
  });
});
