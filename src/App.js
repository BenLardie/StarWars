import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CharacterList from './Componets/CharacterList';



function App() {
  return (
      <Router>
        <Switch>
          <Route path="/">
            <CharacterList />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
