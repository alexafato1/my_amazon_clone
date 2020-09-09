import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';

function App() {
  return (
    <Router >
   
        <Switch >
        <Route path='/checkout'>
            <h1>Checkout</h1>
         </Route>
         <Route path='/login'>
            <h1>Login</h1>
         </Route>
         <Route path='/'>
           <Header/>
           <Home/>
         </Route>
        
        </Switch>
   
    </Router>
  );
}

export default App;
