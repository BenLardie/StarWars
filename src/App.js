import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CharacterList from './Componets/CharacterList';
import ViewDetails from './Componets/ViewDetails'

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
      </Switch>
    </Router>
  );
}

export default App;
