import React from 'react';
import Hello from './Hello';
import { shallow } from 'enzyme';

describe('Hello', () => {
  it('displays a name', () => {
    const hello = shallow(<Hello name="world" />);
    expect(hello.text()).toEqual('Hello world!');
  });
});
