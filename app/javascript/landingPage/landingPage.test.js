import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './landingPage';
import { GlobalHeader, PageHeader, Cards } from 'react-wood-duck';

describe('Landing Page', () => {
  it('renders a GlobalHeader, PageHeader and Cards', () => {
    const landingPage = shallow(<LandingPage />);

    expect(landingPage.find(GlobalHeader).length).toBe(1);
    expect(landingPage.find(PageHeader).length).toBe(1);
    expect(landingPage.find(Cards).length > 0).toBe(true);
  });
});
