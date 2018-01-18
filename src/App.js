import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Home from './components/Home'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import AddEntry from './components/AddEntry';
// import UserEdit from './components/UserEdit';
// import Viewer from'./components/Viewer';
// import Connect from './components/Connect';

class App extends Component {
  render() {

    return (
      <div>
        
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path='/login' component={Login}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          {/* <Route path='/dashboard/viewer'component={Viewer}/> */}
          {/* <Route path="/dashboard/useredit" component={UserEdit}/> */}
          <Route exact path='/dashboard/addentry/:type' component={AddEntry}/>
          {/* <Route path="/dashboard/connect" component={Connect}/> */}
          {/* <Route exact path='/dashboard/addphoto' component={AddPhoto}/> */}
        </Switch> 

       
      </div>
    );
  }
}

export default App;
