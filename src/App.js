import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CharacterList from './Componets/CharacterList';
import ViewDetails from './Componets/ViewDetails'
import SpaceshipDetails from './Componets/SpaceshipDetials';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <CharacterList />
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
