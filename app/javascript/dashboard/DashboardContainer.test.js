import React from 'react';
import { shallow } from 'enzyme';
import DashboardContainer from './DashboardContainer';

jest.mock('../_services/case');
const CaseService = require('../_services/case').default;

jest.mock('../_services/referral');
const ReferralService = require('../_services/referral').default;

describe('<DashboardContainer />', () => {
  it('exists', () => {
    expect(!!DashboardContainer).toBe(true);
  });

  it('renders', () => {
    CaseService.fetch.mockReturnValue(Promise.resolve([]));
    ReferralService.fetch.mockReturnValue(Promise.resolve([]));
    expect(() => shallow(<DashboardContainer />)).not.toThrow();
  });

  describe('#fetchCases', () => {
    let fetchCasesSpy;

    beforeEach(() => {
      fetchCasesSpy = jest.spyOn(CaseService, 'fetch');
      fetchCasesSpy.mockReset();
    });

    afterEach(() => {
      fetchCasesSpy.mockReset();
      fetchCasesSpy.mockRestore();
    });

    it('calls the CaseService', () => {
      CaseService.fetch.mockReturnValue(Promise.resolve([]));
      expect(fetchCasesSpy).not.toHaveBeenCalled();
      const wrapper = shallow(<DashboardContainer />).instance();
      expect(fetchCasesSpy).toHaveBeenCalledTimes(1);
      wrapper.fetchCases();
      expect(fetchCasesSpy).toHaveBeenCalledWith();
      expect(fetchCasesSpy).toHaveBeenCalledTimes(2);
    });
  });

  describe('list view props', () => {
    it('constructs the cardHeaderText', () => {
      CaseService.fetch.mockReturnValue(Promise.resolve([]));
      ReferralService.fetch.mockReturnValue(Promise.resolve([]));
      const wrapper = shallow(<DashboardContainer />);
      expect(
        wrapper.find('DataGridCard').map($el => $el.prop('cardHeaderText'))
      ).toEqual(['Cases', 'Referrals']);
      wrapper.setState({
        cases: { XHRStatus: 'idle' },
        referrals: { XHRStatus: 'idle' },
      });
      wrapper.setState({
        cases: { XHRStatus: 'ready', records: [{}, {}] },
        referrals: { XHRStatus: 'ready', records: [{}, {}] },
      });
      expect(
        wrapper.find('DataGridCard').map($el => $el.prop('cardHeaderText'))
      ).toEqual(['Cases (2)', 'Referrals (2)']);
    });
  });

  describe('#fetchReferrals()', () => {
    it('does something', () => {
      CaseService.fetch.mockReturnValue(Promise.resolve([]));
      const instance = shallow(<DashboardContainer />).instance();
      expect(instance.fetchReferrals).toBeDefined();
    });
  });

  describe('api requests', () => {
    it('tracks case api requests', () => {
      CaseService.fetch.mockReturnValue(Promise.reject(Error('error')));
      const wrapper = shallow(<DashboardContainer />);
      const instance = wrapper.instance();
      instance.fetchCases();
    });

    it('tracks referrals api requests', () => {
      ReferralService.fetch.mockReturnValue(Promise.reject(Error('error')));
      const wrapper = shallow(<DashboardContainer />);
      const instance = wrapper.instance();
      instance.fetchReferrals();
    });
  });
});
