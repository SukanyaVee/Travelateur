import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
// import background from './background.jpg';
import './App.css';
import Dashboard from './components/Dashboard';
import AddJournal from './components/AddJournal';
import AddPhoto from './components/AddPhoto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-title"><b>travel</b><em>ateur</em></div>
          <div className="login-box">
            <Link to='/dashboard' className="links">Login</Link>
          </div>
        </header>
        <Switch>
          <Route exact path='/dashboard' component="Dashboard"/>
          <Route exact path='/addjournal' component="AddJournal"/>
          <Route exact path='/addphoto' component="AddPhoto"/>
        </Switch>

        <div className="photo-header"></div>
      </div>
    );
  }
}

export default App;
