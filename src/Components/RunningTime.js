import React, { Component } from 'react';

class RunningTime extends Component {
  constructor(props) {
    super(props);
    // Initialize state with the start time and elapsed time
    this.state = {
      startTime: Date.now(), // Capture the start time in milliseconds
      elapsedTime: 0 // Initialize elapsed time to 0
    };
  }

  // Update state based on props, although we don't use it here
  static getDerivedStateFromProps(nextProps, prevState) {
    // This method is not strictly necessary here
    // It could be used to synchronize state based on props changes
    return null;
  }

  componentDidMount() {
    // Set up an interval to update the elapsed time every second
    this.timer = setInterval(() => {
      this.setState({
        elapsedTime: Math.floor((Date.now() - this.state.startTime) / 1000)
      });
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to avoid memory leaks
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h1>Application Running Time</h1>
        <p>Elapsed Time: {this.state.elapsedTime} seconds</p>
      </div>
    );
  }
}

export default RunningTime;

// import React, { Component } from 'react';

// class RunningTime extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startTime: Date.now(), // Capture the start time
//       elapsedTime: 0 // Time elapsed since the application started
//     };
//   }

//   componentDidMount() {
//     // Start an interval to update elapsed time every second
//     this.timer = setInterval(() => {
//       this.setState({
//         elapsedTime: Math.floor((Date.now() - this.state.startTime) / 1000)
//       });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     // Clear the interval when the component unmounts
//     clearInterval(this.timer);
//   }

//   render() {
//     return (
//       <div>
//         <h1>Application Running Time</h1>
//         <p>Elapsed Time: {this.state.elapsedTime} seconds</p>
//       </div>
//     );
//   }
// }

// export default RunningTime;
