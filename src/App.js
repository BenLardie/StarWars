import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CharacterList from './Componets/CharacterList';
import ViewDetails from './Componets/CharacterList'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component ={CharacterList} />
        <Route path='viewdetails/:name' component={ViewDetails} />
      </Switch>
    </Router>
  );
}

export default App;
