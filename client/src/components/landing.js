import React, { Component } from "react";
import axios from "axios";

export default class Landing extends Component {
  state = {
    event: []
  };

  componentDidMount() {
    axios.get("/api/event").then(res => {
      console.log(res.data);
      this.setState({
        event: res.data
      });

      //   .catch(error => {
      //     console.error(error);
      //   });
    });
  }
  render() {
    return (
      
      
      
  //     <span class="container">
  //     <h1>All Community Events</h1>
  //     <div class="containerId">
  //       <a href="/community/new">

  //         <button class="waves-effect waves-light btn-large">
  //           Create New Community
  // </button>
  //       </a>
  //       <div class="event-style">

  //         <a href="">

  //         </a>


  //       </div>
  //     </div>
  //   </span>
      
      
      <div>
        <h1>Events</h1>
        
        {/* Accessing the value of message from the state object */}
        {this.state.event.map(event => {
          return <div>{event.name}
          
          </div>
        })}
      </div>
    );
  }
}
 //possible for landing page
// import React, { Component } from "react";
// import axios from "axios";

// export default class Donation extends Component {
//   componentDidMount() {
//     axios.get("/api/event").then(allEvent => {
//       this.setState({ allEvent: res.data });
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.allEvent.map((event)=>{
//             return (<p>{event.name}</p>)
//         })}
//       </div>
//     );
//   }
// }
