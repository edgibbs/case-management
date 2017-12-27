import React from 'react';
import { shallow, mount } from 'enzyme';
import ClientIdPage from './ClientIdPage.js';
import { SideBar } from 'react-wood-duck';

describe('Client ID Page', () => {
  const pageTitle = 'Child Name';
  let clientPage;

  beforeEach(() => {
    clientPage = shallow(<ClientIdPage />);
  });

  it('Has Global Header ', () => {
    expect(clientPage.find('GlobalHeader').length).toBe(1);
  });

  it('Has Page Header ', () => {
    expect(clientPage.find('PageHeader').length).toBe(1);
  });

  it('Has SideBar  ', () => {
    expect(clientPage.find('SideBar').length).toBe(1);
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

  it('Has Cards ', () => {
    expect(clientPage.find('Cards').length).toBe(1);
  });

  it('should an event handler that sets state', () => {
    let component = mount(<ClientIdPage />).instance();
    component.handleSelect('selectedNav', {
      stopPropagation: () => {},
      preventDefault: () => {},
    });
    expect(component.state.selectedNav).toEqual('selectedNav');
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
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
    expect(
      clientPage
        .find('div')
        .at(4)
        .props().className
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
    expect(
      clientPage
        .find('div')
        .at(5)
        .props().className
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
    expect(
      clientPage
        .find('div')
        .at(6)
        .props().className
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
  });

  it('has a <SideBar />', () => {
    expect(clientPage.find(SideBar).exists()).toBe(true);
  });

  it('passes children to <SideBar />', () => {
    expect(clientPage.first(SideBar).prop('children')).toBeTruthy();
  });
});
