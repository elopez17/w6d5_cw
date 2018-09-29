import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    return (
      <div id="clock-container">
        <h1>Clock</h1>
        <div id="clock">
          <div><p>Date:</p> <p>{this.state.time.toDateString()}</p></div>
          <div><p>Time:</p> <p>{this.state.time.getHours()} : {this.state.time.getMinutes()} : {this.state.time.getSeconds()}</p></div>
        </div>
      </div>
    );
  }
}

export default Clock;
