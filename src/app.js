import React from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from 'components/HelloWorld';
import LikeButton from 'components/LikeButton';
import Profile from 'components/Profile';

import './app.scss';

ReactDOM.render(
  <div>
    <HelloWorld />
    {/*<br/><hr/>*/}
    {/*<Profile userId="3" />*/}
    <br/><hr/>
    <LikeButton />
  </div>
, document.getElementById('app'));
