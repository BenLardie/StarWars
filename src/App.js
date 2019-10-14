import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ViewDetails from './Componets/ViewDetails'
import SpaceshipDetails from './Componets/SpaceshipDetials';
import Home from './Componets/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/viewdetials/:name">
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
