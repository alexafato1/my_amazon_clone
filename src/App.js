import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login.js';
import Checkout from './Checkout';


function App() {
  return (
    <Router >
   
        <Switch >

        <Route path='/checkout'>
            <Header/>
            <Checkout/>
         </Route>

         <Route path='/login'>
            <Login/>
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
