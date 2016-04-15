jest.unmock('../Profile');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Profile from '../Profile';

describe('<Profile />', () => {

  // Use `pit` instead of `it` for testing promises.
  // The promise that is being tested should be returned.
  pit('works with promises (async tests)', () => {

    var profile = TestUtils.renderIntoDocument(<Profile userId="5" />);
    var node = ReactDOM.findDOMNode(profile);
    expect(node.textContent).toEqual('Hello');

    return profile.getData().then( user => {
      expect(user.name).toEqual('Paul');
      expect(node.textContent).toEqual('Hello Paul');
    });

  });

});
