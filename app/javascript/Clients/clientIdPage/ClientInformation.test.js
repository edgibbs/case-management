import React from 'react';
import { shallow } from 'enzyme';
import ClientInformation from './ClientInformation.js';

jest.mock('../../_services/client');
let ClientService = require('../../_services/client').default;

describe('#fetchClients', () => {
  let fetchClientSpy;
  beforeEach(() => {
    fetchClientSpy = jest.spyOn(ClientService, 'fetch');
    fetchClientSpy.mockReset();
  });

  afterEach(() => {
    fetchClientSpy.mockRestore();
  });

  it('renders', () => {
    ClientService.fetch.mockReturnValue(Promise.resolve([]));
    expect(() => shallow(<ClientInformation />)).not.toThrow();
  });

  it('calls the ClientService', () => {
    ClientService.fetch.mockReturnValue(Promise.resolve([]));
    expect(fetchClientSpy).not.toHaveBeenCalled();
    const wrapper = shallow(<ClientInformation />).instance();
    expect(fetchClientSpy).toHaveBeenCalledTimes(2);
    wrapper.fetchClient();
    expect(fetchClientSpy).toHaveBeenCalledWith();
    expect(fetchClientSpy).toHaveBeenCalledTimes(3);
  });
});

describe('Client Information', () => {
  let clientPage;

  beforeEach(() => {
    clientPage = shallow(<ClientInformation />);
  });

  it('renders Card Component', () => {
    expect(clientPage.find('Cards').length).toBe(1);
  });

  it('renders InputComponent components', () => {
    expect(clientPage.find('InputComponent').length).toBe(12);
  });

  it('toggles true when checked CSEC data', () => {
    const wrapper = clientPage.instance();
    wrapper.handleChange({
      target: { value: 'This case involves CSEC Data', checked: true },
    });
    expect(wrapper.state.csecBlock).toEqual(true);
  });

  it('toggles the display of the csec block ', () => {
    clientPage.setState({ csecBlock: false });
    expect(clientPage.find('DropDownField').length).toBe(5);
    clientPage.setState({ csecBlock: true });
    expect(clientPage.find('DropDownField').length).toBe(6);
    expect(clientPage.find('Table').length).toBe(1);
  });

  it('dropdown is available on click', () => {
    expect(clientPage.find('DropDownField').length).toBe(5);
    expect(clientPage.find('DateTimePicker').length).toBe(1);
    clientPage.setState({ csecBlock: true });
    expect(clientPage.find('DropDownField').length).toBe(6);
    expect(clientPage.find('DateTimePicker').length).toBe(3);
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
      let clientPage = shallow(<ClientInformation />);
      const instance = clientPage.instance();
      const myFunction = instance.handleDropdownChange('myKey');
      expect(() => {
        myFunction({ value: 'myVal' });
      }).not.toThrow();
      expect(instance.state.myKey).toEqual('myVal');
    });
  });
});
