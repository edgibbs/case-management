import React from 'react';
import DataGridCard from './DataGridCard';
import { shallow } from 'enzyme';

describe('DataGridCard', () => {
  it('renders', () => {
    expect(() => shallow(<DataGridCard />)).not.toThrow();
  });

  it('renders an empty card', () => {
    const wrapper = shallow(<DataGridCard status="idle" />);
    expect(wrapper.children().length).toBe(0);
  });

  it('renders an error', () => {
    const OnError = () => <div>ERROR</div>;
    const wrapper = shallow(
      <DataGridCard status="error" renderOnError={() => <OnError />} />
    );
    expect(wrapper.find(OnError).exists()).toBe(true);
  });

  it('renders empty result set', () => {
    const OnEmpty = () => <div>NOTHING TO SEE HERE</div>;
    const wrapper = shallow(
      <DataGridCard
        status="ready"
        rows={[]}
        renderOnEmpty={() => <OnEmpty />}
      />
    );
    expect(wrapper.find(OnEmpty).exists()).toBe(true);
  });

  it('renders waiting indicator', () => {
    const wrapper = shallow(<DataGridCard status="waiting" />);
    expect(wrapper.children().text()).toEqual('waiting...');
  });

  it('renders a Table', () => {
    const columns = ['a', 'b', 'c'];
    const rows = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2']];
    const wrapper = shallow(
      <DataGridCard status="ready" columns={columns} rows={rows} />
    );
    const tableComponent = wrapper.find('Table').first();
    expect(tableComponent.exists()).toBe(true);
    expect(tableComponent.prop('colNames')).toBe(columns);
    expect(tableComponent.prop('data')).toBe(rows);
  });

  describe('default renderers', () => {
    describe('onEmpty', () => {
      it('renders an Alert of type info', () => {
        const wrapper = shallow(<DataGridCard status="ready" rows={[]} />);
        const alertComponent = wrapper.find('Alert').first();
        expect(alertComponent.exists()).toBe(true);
        expect(alertComponent.prop('alertClassName')).toEqual('info');
      });
    });

    describe('onError', () => {
      it('renders an Alert of type error', () => {
        const wrapper = shallow(<DataGridCard status="error" />);
        const alertComponent = wrapper.find('Alert').first();
        expect(alertComponent.exists()).toBe(true);
        expect(alertComponent.prop('alertClassName')).toEqual('error');
      });
    });
  });
});
