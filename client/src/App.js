import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import './App.css';
import Landing from './components/landing.js'
// class App extends React.Component{

// }

function App() {
  return (
    <div className="App">
      <Router>
        {/* put sticky navbar here */}
        <Switch>
          <Route exact path= "/" component={Landing} />
          {/* <Route exact path = "/event/:id" component={singleEvent} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
