import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Login extends Component {
    constructor(){
        super();
        this.state = {
            registered: true,
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: ''
        };
        this.login=this.login.bind(this)
        this.register=this.register.bind(this)
    }

    login(email, password){
        var user = {"email": email, "password": password}
        axios.post('/api/travelateur/users/login', user).then(res=>{
                this.props.login(res.data.user);
                this.props.history.push('/dashboard/gallery');
            }).catch(res=>{
                // this.props.history.push('/login');
                console.log(res)
            })
    }

    register(firstName, lastName, city,country,email,password){
        var user = {"firstName": firstName, "lastName": lastName, "city": city, "country": country, "email": email, "password": password}
        axios.post('/api/travelateur/users/create', user).then(res=>{
                this.props.login(res.data.user);
                this.props.history.push('/dashboard/gallery');
            }).catch(res=>{
                // this.props.history.push('/login');
                console.log(res)
            })
    }

    componentDidMount(){
        axios.get('/api/travelateur/users').then(res=>{
        this.props.history.push('/dashboard/gallery')
        })
    }

    render() {
        return (
            <div className="App-login">
                
                <div className="login-container">
                    
                {this.state.registered ?
                <div className="reg-container">
                    
                    <div className="align-input-fields">
                    EMAIL <br/> <input type="email" onChange={event=>{this.setState({e: event.target.value})}} required /><br/><br/>
                    PASSWORD <br/><input type="password" onChange={event=>{this.setState({f: event.target.value})}} required /> 
                    </div>
                    <br/><br/>
                    <div>
                        <button className="big-button" onClick={event=>this.login(this.state.e, this.state.f) }>Submit</button> 
                        <button className="small-button" onClick={event=>{this.setState({registered: false})}}>Register first</button>
                    </div>
                </div>
                :
                <div className="reg-container">
                    
                    <div className="align-input-fields">
                    WELCOME<br/><br/>
                    FIRST NAME <br/><input onChange={event=>{this.setState({a: event.target.value})}}/><br/><br/>
                    LAST NAME <br/> <input onChange={event=>{this.setState({b: event.target.value})}}/><br/><br/>
                    CITY <br/> <input onChange={event=>{this.setState({c: event.target.value})}}/><br/><br/>
                    COUNTRY <br/> <input onChange={event=>{this.setState({d: event.target.value})}}/><br/><br/>
                    EMAIL <br/> <input type="email" onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD <br/> <input  type="password" onChange={event=>{this.setState({f: event.target.value})}}/>            
                    </div>
                    <br/><br/>
                    <div>
                    *By clicking submit, you consent to sharing your info.<br/>
                        <button className="big-button" onClick={event=>{this.register(this.state.a, this.state.b, this.state.c,this.state.d,this.state.e,this.state.f)} }>Submit</button>  
                        <button className="small-button" onClick={event=>{this.setState({registered: true})}}>Login instead</button>
                    </div>
                </div>
                }
                </div>
                <header className="login-header">
                    <div className="login-title"><Link to='/'><b><b>travel</b></b>ateur</Link></div>
                </header>
                
            </div>
        );
    }
}
 

const mapDispatchToProps = {
    login: login
  }

export default connect(null, mapDispatchToProps)(Login);
