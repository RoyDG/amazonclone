import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './Header'
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';


const promise = loadStripe(
  "pk_test_51HQm2vGMVBv8F0TvMvtMumZoajfmXoCHVpuSCZiZUGAHkxC2ve4QeMU56S2enuDgDCuDuVvJ6rB0cYnxZWGieMl800U5OS0dFe"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      auth.onAuthStateChanged(authUser => {
        console.log('Hello', authUser);
        
        if (authUser) {
          dispatch ({
            type: 'SET_USER',
            user: authUser
          })
        }
        else {
          dispatch ({
            type: 'SET_USER',
            user: null
          }) 
        }
      })
    
  }, [])
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>

          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>

          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>

          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>

          <Route path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
