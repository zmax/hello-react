jest.unmock('../HelloWorld');
// jest.unmock('../HelloWorld/HelloWorld');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import HelloWorld from '../HelloWorld';

describe('<HelloWorld />', () => {

  // beforeEach(() => {
  // });

  it('has content equal Hello World!!', () => {
    let component, componentNode;
    component = TestUtils.renderIntoDocument(<HelloWorld />);
    componentNode = ReactDOM.findDOMNode(component);
    expect(componentNode.textContent).toEqual('Hello World!!');
  });

  it('can assign a title prop', ()=>{
    let component, componentNode;
    component = TestUtils.renderIntoDocument(<HelloWorld title="Starck"/>);
    componentNode = ReactDOM.findDOMNode(component);
    expect(componentNode.textContent).toEqual('Hello World!! Starck');
  });

});
