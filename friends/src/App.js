import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';
import logo from './logo.svg';
import './App.css';
import AddFriend from './components/AddFriend';


function App() {

  const logout = () => {
    // request to /api/logout
    window.localStorage.removeItem('token')
  };

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/" onClick={logout}>Logout</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/friends/add">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          {/* history (navigating), match (access params), location (url info) */}
          <PrivateRoute exact path="/friends" component={Friends} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
