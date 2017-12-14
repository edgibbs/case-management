import React from 'react';
import { shallow } from 'enzyme';
import { Cards } from 'react-wood-duck';
import Caseload from './Caseload';

describe('Caseload', () => {
  it('should wrap <Card />', () => {
    const Wrapper = shallow(<Caseload />);
    expect(Wrapper.find(Cards).exists()).toBe(true);
  });

  describe('#renderRecords()', () => {
    let cases;
    beforeEach(() => {
      cases = [
        {
          id: '1',
          name: 'Alice',
          assignmentType: 'AAA',
          assignmentDate: 'BBB',
          serviceComponent: 'CCC',
        },
        {
          id: '2',
          name: 'Bob',
          assignmentType: 'AAA',
          assignmentDate: 'BBB',
          serviceComponent: 'CCC',
        },
      ];
    });

    it('should return a table', () => {
      const Wrapper = shallow(<Caseload status="ready" cases={cases} />);
      const children = Wrapper.find('tbody > tr');
      expect(children.length).toBe(cases.length);
    });
  });

  describe('#renderEmpty', () => {
    it('should render when empty caseload', () => {
      const testMsg = 'No cases for you!';
      const emptyFn = jasmine.createSpy('emptyFn').and.returnValue(testMsg);
      const Wrapper = shallow(
        <Caseload renderEmpty={emptyFn} status="ready" />
      );
      expect(emptyFn).toHaveBeenCalledWith();
      expect(Wrapper.find(Cards).prop('children')).toEqual(testMsg);
    });

    it('should have a default empty message', () => {
      const Wrapper = shallow(<Caseload status="ready" cases={[]} />);
      expect(Wrapper.find(Cards).prop('children')).toEqual('empty!');
    });
  });

  describe('#renderWaiting', () => {
    it('should render when waiting', () => {
      const testMsg = 'Hello world';
      const waitingFn = jasmine.createSpy('waitingFn').and.returnValue(testMsg);
      const Wrapper = shallow(
        <Caseload renderWaiting={waitingFn} status="not-ready" />
      );
      expect(waitingFn).toHaveBeenCalledWith();
      expect(Wrapper.find(Cards).prop('children')).toEqual(testMsg);
    });

    it('should have a default message', () => {
      const Wrapper = shallow(<Caseload status="not-ready" />);
      expect(Wrapper.find(Cards).prop('children')).toEqual('waiting...');
    });
  });
});
