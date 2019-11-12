import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HelloWorld from './components/HelloWorld.js';
import './App.css';
import Landing from './components/landing.js';
import navbar from './components/navBar.js';
import singleEvent from './components/singleEvent.js';
import singleDonation from './components/singleDonation.js';
// class App extends React.Component{

// }

function App() {
  return (
    <div className="App">
      <Router>
        {navbar} 
        {/* put sticky navbar here */}
        <Switch>
          <Route exact path= "/" component={Landing} />
          <Route exact path= "/event/:eventId" component={singleEvent} />
          <Route exact path= "/donation/:donationId" component={singleDonation} />
          <Route exact path= '/helloworld' component ={HelloWorld} />
     
        </Switch>
      </Router>
    </div>
  );
}

export default App;
