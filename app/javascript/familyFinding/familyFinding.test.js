import React from 'react';
import { shallow } from 'enzyme';
import FamilyFinding from './familyFinding';
import {
  GlobalHeader,
  PageHeader,
  Cards,
  SideBar,
  DropDownField,
  InputComponent,
} from 'react-wood-duck';

describe('Family Finding Page', () => {
  it('#renders a GlobalHeader, PageHeader, Cards, SideBar', () => {
    const Wrapper = shallow(<FamilyFinding />);
    expect(Wrapper.find(GlobalHeader).length).toBe(1);
    expect(Wrapper.find(PageHeader).length).toBe(1);
    expect(Wrapper.find(Cards).length).toBeGreaterThan(0);
    expect(Wrapper.find(SideBar).length).toBe(1);
  });

  it('#renders <InputComponent />', () => {
    const Wrapper = shallow(<FamilyFinding />);
    expect(Wrapper.find(InputComponent).length).toBe(1);
  });

  describe('<DropDownField />', () => {
    it('#renders', () => {
      const Wrapper = shallow(<FamilyFinding />);
      expect(Wrapper.find(DropDownField).length).toBe(1);
      expect(Wrapper.find(DropDownField).exists()).toBe(true);
    });

    it('changes the selected options in drop down field', () => {
      const Wrapper = shallow(<FamilyFinding />);
      const testValue = { value: 'Sally Johnson' };
      Wrapper.instance().handleChangeDropDown(testValue);
      expect(Wrapper.state('selectedOption')).toEqual(testValue.value);
    });
  });
});
