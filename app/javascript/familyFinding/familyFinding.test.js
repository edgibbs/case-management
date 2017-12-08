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
  it('renders a GlobalHeader, PageHeader, Cards, SideBar', () => {
    const familyFinding = shallow(<FamilyFinding />);
    expect(familyFinding.find(GlobalHeader).length).toBe(1);
    expect(familyFinding.find(PageHeader).length).toBe(1);
    expect(familyFinding.find(Cards).length > 0).toBe(true);
    expect(familyFinding.find(SideBar).length).toBe(1);
    expect(familyFinding.find(DropDownField).length).toBe(1);
    expect(familyFinding.find(InputComponent).length).toBe(1);
  });
  it('should create a <DropDownField />', () => {
    expect(
      shallow(<FamilyFinding />)
        .find(DropDownField)
        .exists()
    ).toBe(true);
  });
  it('should pass a noop callback to <DropDownField />', () => {
    const Wrapper = shallow(<FamilyFinding />).find(DropDownField);
    expect(Wrapper.prop('onChange')).toBeDefined();
    expect(() => Wrapper.simulate('change')).not.toThrow();
  });
});
