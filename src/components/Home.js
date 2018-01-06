import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import pic2 from './photo-header/pic2.jpg';
import pic3 from './photo-header/pic3.jpg';
import pic4 from './photo-header/pic4.jpg';
import pic5 from './photo-header/pic5.jpg';
import pic6 from './photo-header/pic6.jpg';
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
            <Link to='/login' className="links"><button className="login-home-button">Login</button></Link>
          </div>
        </header>
        <div className="photo-header">
          <img src={pic2} alt="oh! the places you'll go!"/>
          <div className="text-over-image">Photo blogging and journaling your precious memories</div>
          {/* {picArray.forEach(elem=><img src={elem} alt="oh! the places you'll go!"/>)} */}
        </div>
        <footer className="home-footer">
          Sukanya Vijayakumar @DevMountain Full Stack Immersive Personal Project
        </footer>
      </div>
    );
  }
}   

export default Home;
