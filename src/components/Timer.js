import React, {Component} from 'react';

export var timerGame = (callback) => {
  // console.log('Ready....go!');
  setTimeout(function() {
    // console.log('Times up -- stop!');
    callback && callback();
  }, 1000);
}

export var infiniteTimerGame = (callback) => {
  // console.log('Ready....go!');

  setTimeout(function() {
    // console.log('Times up! 10 seconds before the next game starts...');
    callback && callback();

    // Schedule the next game in 10 seconds
    setTimeout(function() {
      infiniteTimerGame(callback);
    }, 10000);

  }, 1000);
}

export default class Timer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div></div>
  }
}
