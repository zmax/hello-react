jest.unmock('../HelloWorld');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import HelloWorld from '../HelloWorld';

describe('<HelloWorld />', () => {
  let component;
  beforeEach(() => {
    component = TestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('has content equal Hello World!!', () => {
    let componentNode = ReactDOM.findDOMNode(component);
    expect(componentNode.textContent).toEqual('Hello World!!');
  });

  it('can click and will change content.', () => {
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithTag(component, 'div')
    );
    let componentNode = ReactDOM.findDOMNode(component);
      expect(componentNode.textContent).toContain('(clicked)');
      // expect(componentNode.textContent).toEqual('Hello World!! (clicked)');
  });

});
