import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/loginActions.js';

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Profile from './components/Profile';
import LikedPhotos from './components/LikedPhotos';

import './App.css';


const App = () => {

  const loginInfo = useSelector(state => state.login);
  const dispatch = useDispatch();

  const triggerLogout = () => {
    dispatch(logout());
    // maybe add a logout to the photo reducer as well
  }

  return (
    <div className="App">
    <Router>
        {loginInfo.isLoggedIn && <Navbar/>}
        {loginInfo.isLoggedIn && <Header/>}
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
          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/profile">
            <Profile/>
          </Route>

          <Route path="/liked">
            <LikedPhotos/>
          </Route>
        </Switch>
        {loginInfo.isLoggedIn && 
          <button className="logout-button" onClick={triggerLogout}>
            <Link to="/">Log Out </Link> 
          </button>}
    </Router>
    </div>
  );
}

export default App;
