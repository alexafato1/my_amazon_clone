import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Header from './Header';

function App() {
  return (
    <Router>
   
        <Switch>
         <Route path='/'>
           <Header/>
           <h1>Home page</h1>
         </Route>
        </Switch>
   
    </Router>
  );
}

export default App;
