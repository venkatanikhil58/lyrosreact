import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0, // Time input by the user
      remainingTime: 0, // Time left for the countdown
      isActive: false // Whether the countdown is active
    };
    this.handleChange = this.handleChange.bind(this);
    this.startCountdown = this.startCountdown.bind(this);
  }

  handleChange(event) {
    this.setState({ time: event.target.value });
  }

  startCountdown() {
    this.setState({ remainingTime: this.state.time, isActive: true });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.isActive) {
        if (this.state.remainingTime > 0) {
          this.setState(prevState => ({
            remainingTime: prevState.remainingTime - 1
          }));
        } else {
          this.setState({ isActive: false });
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="number"
            value={this.state.time}
            onChange={this.handleChange}
            placeholder="Enter time in seconds"
          />
          <button onClick={this.startCountdown}>Start Countdown</button>
        </div>
        <div>
          <h1>Remaining Time: {this.state.remainingTime} seconds</h1>
        </div>
      </div>
    );
  }
}

export default CountdownTimer;
