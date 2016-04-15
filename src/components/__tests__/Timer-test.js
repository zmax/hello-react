jest.unmock('../Timer');

describe('<Timer />', () => {

  it('waits 1 second before ending the game', () => {
    const {timerGame} = require('../Timer');
    timerGame();

    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(1000);
  });

  it('calls the callback after 1 second', () => {
    const {timerGame} = require('../Timer');
    const callback = jest.fn();

    timerGame(callback);

    // At this point in time, the callback should not have been called yet
    expect(callback).not.toBeCalled();

    // Fast-forward until all timers have been executed
    jest.runAllTimers();

    // Now our callback should have been called!
    expect(callback).toBeCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

  it('schedules a 10-second timer after 1 second', () => {
    const {infiniteTimerGame} = require('../Timer');
    const callback = jest.fn();

    infiniteTimerGame(callback);

    // At this point in time, there should have been a single call to
    // setTimeout to schedule the end of the game in 1 second.
    expect(setTimeout.mock.calls.length).toBe(1);
    expect(setTimeout.mock.calls[0][1]).toBe(1000);

    // Fast forward and exhaust only currently pending timers
    // (but not any new timers that get created during that process)
    jest.runOnlyPendingTimers();

    // At this point, our 1-second timer should have fired it's callback
    expect(callback).toBeCalled();

    // And it should have created a new timer to start the game over in
    // 10 seconds
    expect(setTimeout.mock.calls.length).toBe(2);
    expect(setTimeout.mock.calls[1][1]).toBe(10000);
  });

});
