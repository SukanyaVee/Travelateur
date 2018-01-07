import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import l1 from './photo-header/l1.jpg' 
import l2 from './photo-header/l2.jpg';
import l3 from './photo-header/l3.jpg';
// import './App.css';

import Login from './Login'
// import Dashboard from './components/Dashboard';
// import AddJournal from './components/AddJournal';
// import AddPhoto from './components/AddPhoto'

class Home extends Component {
  render() {
    // const picArray = [pic2, pic3,pic4, pic5, pic6]

    return (
      <div className="App-home">
        <header className="App-header">
          <div className="App-title"><b><b>travel</b></b>ateur</div>
          <div className="login-box">
            <Link to='' className="links"><button className="login-home-button">find inspiration</button></Link>
            <Link to='/login' className="links"><button className="login-home-button">login</button></Link>
          </div>
        </header>
        
        <div className="photo-banner">
          <img src={l1} alt="oh! the places you'll go!"/>
          <img src={l2} alt="oh! the places you'll go!"/>
          <img src={l3} alt="oh! the places you'll go!"/>
          {/* {picArray.forEach(elem=><img src={elem} alt="oh! the places you'll go!"/>)} */}
        </div>
        <div><p className="text-banner"> Oh, the places you'll go!</p></div>    

        <footer className="home-footer">
          Sukanya Vijayakumar @DevMountain Full Stack Immersive Personal Project
        </footer>
      </div>
    );
  }
}   

export default Home;
