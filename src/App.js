import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';


const App = () => {

  const loginInfo = useSelector(state => state.login);

  // const dispatch = useDispatch();

  // useEffect(() => {

  // }, [dispatch]); 
  // why pass dispatch as a dependancy? https://stackoverflow.com/a/58061735



  return (
    <div className="App">
    <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            {/*if logged in home page, if not, login/register page*/}
            {loginInfo.isLoggedIn ? <Home /> : <Login/>}
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
