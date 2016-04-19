jest.unmock('../LikeButton');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import LikeButton from '../LikeButton';

describe('<LikeButton />', () => {
  // let component, componentNode;
  let wrapper;
  beforeEach(()=> {
    // component = TestUtils.renderIntoDocument(<LikeButton />);
    // componentNode = ReactDOM.findDOMNode(component);
    wrapper = mount(<LikeButton />);
  });

  it("can be clicked, and label will change to Unlike.", () => {
    // TestUtils.Simulate.click(
    //   TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    // );
    // expect(componentNode.textContent).toContain('Unlike');
    expect(wrapper.text()).toContain('Like');
    expect(wrapper.find('div.btn').length).toEqual(1);
    expect(wrapper.find('div.btn-primary').length).toEqual(0);
    wrapper.find('div.btn').simulate('click');
    expect(wrapper.find('div.btn-primary').length).toEqual(1);
    expect(wrapper.text()).toContain('Unlike');
  });

  it("label will change to Like after being clicked again.", ()=>{
    // TestUtils.Simulate.click(
    //   TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    // );
    // TestUtils.Simulate.click(
    //   TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    // );
    // // console.log(componentNode.classList.contains('btn'));
    // // expect(componentNode.classList.contains('btn')).toBe(true);
    // expect(componentNode.textContent).toEqual('Like');
    expect(wrapper.text()).toContain('Like');
    wrapper.simulate('click');
    expect(wrapper.text()).toContain('Unlike');
    wrapper.simulate('click');
    expect(wrapper.text()).toContain('Like');
  });
});
