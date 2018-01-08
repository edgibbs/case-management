import React from 'react';
import { shallow } from 'enzyme';
import Table from './Table';

describe('<Table />', () => {
  it('exists', () => {
    expect(!!Table).toBe(true);
  });

  it('renders', () => {
    expect(() => {
      shallow(<Table colNames={[]} data={[]} />);
    }).not.toThrow();
  });

  it('renders colNames in the thead', () => {
    const wrapper = shallow(<Table colNames={['Foo', 'Bar']} />);
    expect(wrapper.find('thead th').length).toBe(2);
    expect(
      wrapper
        .find('th')
        .first()
        .text()
    ).toEqual('Foo');
  });

  it('renders data in the tbody', () => {
    const myData = [['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']];
    const wrapper = shallow(<Table colNames={[]} data={myData} />);
    expect(wrapper.find('tbody tr').length).toBe(3);
    const tds = wrapper
      .find('tbody tr')
      .first()
      .find('td');
    expect(tds.length).toBe(3);
    expect(tds.first().text()).toEqual('a1');
  });
});
