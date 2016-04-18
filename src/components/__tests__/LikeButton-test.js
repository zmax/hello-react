jest.unmock('../LikeButton');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import LikeButton from '../LikeButton';

describe('<LikeButton />', () => {
  let component, componentNode;
  beforeEach(()=> {
    component = TestUtils.renderIntoDocument(<LikeButton />);
    componentNode = ReactDOM.findDOMNode(component);
  });

  it("should can click, and label will change to Unlike.", ()=>{
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    );
    expect(componentNode.textContent).toContain('Unlike');
  });

  it("label should change to Like if Unlike now.", ()=>{
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    );
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    );
    // console.log(componentNode.classList.contains('btn'));    
    // expect(componentNode.classList.contains('btn')).toBe(true);
    expect(componentNode.textContent).toEqual('Like');
  });
});
