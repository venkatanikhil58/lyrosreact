// import React, { Component } from "react";

// class App extends Component {

//     constructor() {
//         super()
//         this.state = {
//             mesaage:'Welcome visitor'
//         }
//     }

//     changeMessage = () => {
//         this.setState({
//             message: 'Thankyou for subscribing'
//         })
//     }
//     render() {
//         return(
//             <div>
//                 <h1>{this.state.mesaage}</h1>
//                 <button onClick={this.changeMessage}>subscribe</button>
//             </div>
            

//         )
//     }
// }
// export default Message;

import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Old Name'
    };
  }

  updateName = () => {
    this.setState({ name: 'New Name' });
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.updateName}>Update Name</button>
      </div>
    );
  }
}

export default App;