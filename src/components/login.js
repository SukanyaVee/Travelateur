import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import './App.css';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            registered: false,
            firstName: '',
            lastName: '',
            city: '',
            country: '',
            username: '',
            password: ''
        };
        // bind functions
    }
  render() {
    return (
        <div className="App-home">
            <header className="App-header">
                <div className="App-title"><b><b>travel</b></b>ateur</div>
            </header>
            {/* First Name: <input onChange=""/>
            Last Name: <input onChange=""/>
            City: <input onChange=""/>
            State: <input onChange=""/> */}
            <div className="dash-greeting">
                Welcome!
            </div>
            
            <div className="login-container">
                <div className="reg-container">
                    <button class="small-button" onClick={event=>{this.setState({registered: true})}}>Login</button>
                    <button class="small-button" onClick={event=>{this.setState({registered: false})}}>Register</button>
                </div>
                <br/><br/>
            {this.state.registered ?
            <div>
                Username: <input onChange={event=>{this.setState({username: event.target.value})}}/><br/><br/>
                Password: <input onChange={event=>{this.setState({password: event.target.value})}}/> <br/><br/>
                <Link to="/dashboard">
                    <button className="big-button" onClick={event=>{               } }>Submit</button>
                </Link>
            </div>
            :
            <div>
                First Name: <input onChange={event=>{this.setState({firstName: event.target.value})}}/><br/><br/>
                Last Name: <input onChange={event=>{this.setState({lastName: event.target.value})}}/><br/><br/>
                City: <input onChange={event=>{this.setState({city: event.target.value})}}/><br/><br/>
                Country: <input onChange={event=>{this.setState({country: event.target.value})}}/><br/><br/>
                Username: <input onChange={event=>{this.setState({username: event.target.value})}}/><br/><br/>
                Password: <input onChange={event=>{this.setState({password: event.target.value})}}/> <br/><br/>
                <Link to="/dashboard">
                    <button className="big-button" onClick={event=>{               } }>Submit</button>
                </Link>
            </div>
            }</div>
        </div>
    );
  }
}

export default Login;
