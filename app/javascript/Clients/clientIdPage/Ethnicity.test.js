import React from 'react';
import { shallow } from 'enzyme';
import Ethnicity from './Ethnicity.js';

describe('Ethnicity', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Ethnicity />);
  });

  it('renders Card Component', () => {
    expect(component.find('Cards').length).toBe(1);
  });

  it('renders DropDownField Component', () => {
    expect(component.find('DropDownField').length).toBe(1);
  });

  it('should render the DatePicker component', () => {
    expect(component.find('DateTimePicker').length).toEqual(1);
  });

  it('should render the Table component', () => {
    expect(component.find('Table').length).toEqual(1);
  });

  it('renders RaceFormContainer Component', () => {
    expect(component.find('RaceFormContainer').length).toBe(1);
  });

  describe('#handleDropdownChange', () => {
    it('should sets state when an event handler Calls ', () => {
      const instance = component.instance();
      const element = instance.handleDropdownChange('key');
      expect(() => {
        element({ value: 'sacramento' });
      }).not.toThrow();
      expect(instance.state.key).toEqual('sacramento');
    });
  });

  describe('#handleChange', () => {
    it('should manage the selection', () => {
      const instance = component.instance();
      instance.handleChange({ target: { value: 'foo' } });
      expect(instance.state.selected).toContain('foo');
      instance.handleChange({ target: { value: 'foo' } });
      expect(instance.state.selected).not.toContain('foo');
    });
  });
});
