import React from 'react';
import { shallow, mount } from 'enzyme';
import ClientIdPage from './ClientIdPage.js';

describe('Client ID Page', () => {
  const pageTitle = 'Child Name';
  let clientPage;

  beforeEach(() => {
    clientPage = shallow(<ClientIdPage />);
  });

  describe('#handleSelect', () => {
    it('stops propagation', () => {
      const event = { stopPropagation: () => {} };
      jest.spyOn(event, 'stopPropagation');
      const wrapper = mount(<ClientIdPage />).instance();
      wrapper.handleSelect('_href', event);
      expect(event.stopPropagation).toHaveBeenCalledWith();
    });
  });

  it('Has Global Header ', () => {
    expect(clientPage.find('GlobalHeader').length).toBe(1);
  });

  it('Has Page Header ', () => {
    expect(clientPage.find('PageHeader').length).toBe(1);
  });

  it('Has ClientInformation', () => {
    expect(clientPage.find('ClientInformation').length).toBe(1);
  });

  it('Has OtherClientInformation', () => {
    expect(clientPage.find('OtherClientInformation').length).toBe(1);
  });

  it('Has Safety Alert Information', () => {
    expect(clientPage.find('SafetyAlertInformation').length).toBe(1);
  });

  it('Has Ethnicity ', () => {
    expect(clientPage.find('Ethnicity').length).toBe(1);
  });

  it('Has Class Names ', () => {
    expect(
      clientPage
        .find('PageHeader')
        .at(0)
        .props().pageTitle
    ).toBe(pageTitle);
    expect(
      clientPage
        .find('div')
        .at(1)
        .props().className
    ).toBe('container');
    expect(
      clientPage
        .find('div')
        .at(2)
        .props().className
    ).toBe('row');
    expect(
      clientPage
        .find('div')
        .at(3)
        .props().className
    ).toBe('col-sm-3');
    expect(
      clientPage
        .find('div')
        .at(4)
        .props().className
    ).toBe('col-sm-9');
  });
});
