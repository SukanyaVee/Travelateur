import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
// import AddEntry from './components/AddEntry';
// import UserEdit from './components/UserEdit';
// import Viewer from'./components/Viewer';
// import Connect from './components/Connect';d

class App extends Component {
  render() {

    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch> 

       
      </div>
    );
  }
}

export default App;
