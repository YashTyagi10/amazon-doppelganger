import React, { useEffect } from "react";
import Header from './Header';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Checkout from './Checkout'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when the app component loads...
    // (It's like ann if statement in React)

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // The user just logged in/ the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Header/>

        <Switch>
          <Route path="./login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout />
           </Route>
           <Route path="/">
             <Home />
         </Route>
       </Switch>
     </div>
    </Router>
  );
}

export default App
