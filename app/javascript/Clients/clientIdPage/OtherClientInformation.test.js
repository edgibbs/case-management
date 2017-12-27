import React from 'react';
import { shallow } from 'enzyme';
import OtherClientInformation from './OtherClientInformation.js';

describe('Other Client Information', () => {
  let otherClient;
  beforeEach(() => {
    otherClient = shallow(<OtherClientInformation />);
  });

  it('renders a Cards, DropDownFields and CheckboxRadioGroup', () => {
    expect(otherClient.find('Cards').length).toBeGreaterThan(0);
    expect(otherClient.find('DropDownField').length).toEqual(2);
    expect(otherClient.find('CheckboxRadioGroup').length).toEqual(4);
    expect(otherClient.find('Button').length).toEqual(2);
  });

  describe('#handleChange() Functions', () => {
    it('should manage the handleSpoken selection', () => {
      const instance = otherClient.instance();
      instance.handleSpokenChange({ target: { value: 'Yes' } });
      expect(instance.state.selected).toContain('Yes');
      instance.handleSpokenChange({ target: { value: 'No' } });
      expect(instance.state.selected).not.toContain(['No']);
    });

    it('should manage the Spoken In selection', () => {
      const instance = otherClient.instance();
      instance.handleSpokenInChange({ target: { value: 'No' } });
      expect(instance.state.spokenInSelection).toContain('No');
      instance.handleSpokenInChange({ target: { value: 'Yes' } });
      expect(instance.state.spokenInSelection).not.toContain(['Yes']);
    });

    it('should manage the Literate selection', () => {
      const instance = otherClient.instance();
      instance.handleLiterateChange({ target: { value: 'Unknown' } });
      expect(instance.state.literateSelection).toContain('Unknown');
      instance.handleLiterateChange({ target: { value: 'Not Applicable' } });

      expect(instance.state.literateSelection).not.toContain([
        'Not Applicable',
      ]);
    });

    it('should manage the Incapacitated selection', () => {
      const instance = otherClient.instance();
      instance.handleIncapacitated({ target: { value: 'Yes' } });
      expect(instance.state.incapacitatedParentSelection).toContain('Yes');
      instance.handleIncapacitated({ target: { value: 'unknown' } });
      expect(instance.state.incapacitatedParentSelection).not.toContain([
        'unknown',
      ]);
    });
  });

  describe('#HandleDropDownChange Function', () => {
    it('should update state based on handleDropdownChange event', () => {
      const instance = otherClient.instance();
      const myFunction = instance.handleDropdownChange('myKey');
      expect(() => {
        myFunction({ value: 'foo-bar' });
      }).not.toThrow();
      expect(instance.state.myKey).toEqual('foo-bar');
    });
  });
});
