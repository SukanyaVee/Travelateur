import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// import l1 from './photo-header/l4.jpg' 
// import l2 from './photo-header/l2.jpg';
// import l3 from './photo-header/l3.jpg';
// import './App.css';



class Home extends Component {
  render() {
    // const picArray = [pic2, pic3,pic4, pic5, pic6]

    return (
      <div className="App-home">
        <footer className="home-footer">
          Sukanya Vijayakumar @DevMountain Full Stack Immersive Personal Project
        </footer>
        <header className="App-header">
          <div className="App-title"><b><b>travel</b></b>ateur</div>
          <div className="login-box">
            {/* <Link to='' className="links"><button className="login-home-button">find inspiration</button></Link> */}
            <Link to='/login' className="links"><button className="login-home-button"><b>login</b></button></Link>
          </div>
        </header>
        
        {/* <div className="photo-banner">
          <img src={l1} alt="oh! the places you'll go!"/>
          <img src={l2} alt="oh! the places you'll go!"/>
          <img src={l3} alt="oh! the places you'll go!"/>
        </div> */}
        
        {/* <div><p className="text-banner"> <em>Oh, the places you'll go!</em></p></div>     */}

        
      </div>
    );
  }
}   

export default Home;
