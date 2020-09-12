import React,{ useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login.js';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{user }, dispatch ] = useStateValue();
 //Piece of code which runs based on a given condition

  useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((authUser) => {
     if (authUser) {
       //if user is logged in...
       dispatch({
         type: 'SET_USER',
         user: authUser
       })
     } else {
       //the user is logged out...
       dispatch({
        type: 'SET_USER',
        user: null
      })
        
     }
   })

  
    return () => {
      //Any cleanup operation go in here...
      unsubscribe();
    }

  }, []);

  console.log('USER IS >>>>', user)

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
