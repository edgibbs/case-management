import React from 'react';
import { shallow } from 'enzyme';
import ClientInformation from './ClientInformation.js';

describe('Client Information', () => {
  let clientPage;

  beforeEach(() => {
    clientPage = shallow(<ClientInformation />);
  });

  it('renders Card Component', () => {
    expect(clientPage.find('Cards').length).toBe(1);
  });

  it('renders InputComponent components', () => {
    expect(clientPage.find('InputComponent').length).toBe(11);
  });

  it('renders CheckboxRadioGroup components', () => {
    expect(clientPage.find('CheckboxRadioGroup').length).toBe(5);
  });

  describe('#handleChange()', () => {
    it('should manage the selection', () => {
      const instance = clientPage.instance();
      instance.handleChange({ target: { value: 'foo' } });
      expect(instance.state.selected).toContain('foo');
      instance.handleChange({ target: { value: 'foo' } });
      expect(instance.state.selected).not.toContain('foo');
    });
  });

  describe('#handleDropDownChange()  function', () => {
    it('should an event handler that sets state', () => {
      const instance = clientPage.instance();
      const myFunction = instance.handleDropdownChange('myKey');
      expect(() => {
        myFunction({ value: 'myVal' });
      }).not.toThrow();
      expect(instance.state.myKey).toEqual('myVal');
    });

    it('toggles true when checked CSEC data', () => {
      const wrapper = clientPage.instance();
      wrapper.handleChange({
        target: { value: 'This case involves CSEC Data', checked: true },
      });
      expect(wrapper.state.csecBlock).toEqual(true);
    });

    it('dropdown is available on click', () => {
      expect(clientPage.find('DropDownField').length).toBe(5);
      expect(clientPage.find('DateTimePicker').length).toBe(2);
      clientPage.setState({ csecBlock: true });
      expect(clientPage.find('DropDownField').length).toBe(6);
      expect(clientPage.find('DateTimePicker').length).toBe(4);
    });
  });
});
