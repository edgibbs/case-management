import React from 'react';
import { shallow } from 'enzyme';
import ClientIdPage from './ClientIdPage.js';
import { SideBar } from 'react-wood-duck';

describe('<ClientIdPage />', () => {
  const pageTitle = 'Child Name';

  const clientPage = shallow(<ClientIdPage />);
  it('renders a GlobalHeader and SideNav, Cards', () => {
    expect(clientPage.find('GlobalHeader').length).toBe(1);
    expect(clientPage.find('PageHeader').length).toBe(1);
    expect(clientPage.find('Cards').length).toBe(4);
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
        .at(2)
        .props().className
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
    expect(
      clientPage
        .find('div')
        .at(2)
        .props().className
    ).toBe('col-md-9 col-md-offset-3 col-xs-12');
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
  });

  it('has a <SideBar />', () => {
    expect(clientPage.find(SideBar).exists());
  });

  it('passes children to <SideBar />', () => {
    expect(clientPage.first(SideBar).prop('children')).toBeTruthy();
  });
});
