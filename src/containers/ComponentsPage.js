import React, {Component} from 'react';
import HelloWorld from 'components/HelloWorld';
import LikeButton from 'components/LikeButton';
import Profile from 'components/Profile';
import {Li, Ul} from 'components/List';

export default function(props) {  
  return <div>
    <HelloWorld />
    {/*<br/><hr/>*/}
    {/*<TodoApp store={store} />*/}
    {/*<Profile userId="4" />*/}
    <br/><hr/>
    <LikeButton />
    <br/><hr/>
    <Ul>
      <Li>Hello</Li>
      <Li>Foo</Li>
      <Li>Baz</Li>
      <Li>Qux</Li>
    </Ul>
  </div>
}
