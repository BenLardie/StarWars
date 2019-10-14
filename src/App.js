import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ViewDetails from './Components/ViewDetails'
import SpaceshipDetails from './Components/SpaceshipDetails';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/viewdetails/:name">
          <ViewDetails />
        </Route>
        <Route path="/viewspaceship/:name">
          <SpaceshipDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
