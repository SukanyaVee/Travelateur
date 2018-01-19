import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';
import axios from 'axios';


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
            <div className="dashboard">
                
                <div className="login-container">
                    
                {this.state.registered ?
                <div className="reg-container">
                    
                    <div className="align-input-fields">
                    EMAIL &emsp; <input type="email" onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD &emsp; <input type="password" onChange={event=>{this.setState({f: event.target.value})}}/> <br/><br/>
                    </div>
                    <br/><br/>
                    <div>
                        <button className="big-button" onClick={event=>this.login(this.state.e, this.state.f) }>Submit</button> 
                        <button class="small-button" onClick={event=>{this.setState({registered: false})}}>Register first</button>
                    </div>
                </div>
                :
                <div className="reg-container">
                    
                    <div className="align-input-fields">
                    FIRST NAME &emsp; <input onChange={event=>{this.setState({a: event.target.value})}}/><br/><br/>
                    LAST NAME &emsp; <input onChange={event=>{this.setState({b: event.target.value})}}/><br/><br/>
                    CITY &emsp; <input onChange={event=>{this.setState({c: event.target.value})}}/><br/><br/>
                    COUNTRY &emsp; <input onChange={event=>{this.setState({d: event.target.value})}}/><br/><br/>
                    EMAIL &emsp; <input type="email" onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD &emsp; <input  type="password" onChange={event=>{this.setState({f: event.target.value})}}/> <br/><br/>            
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
                    <div className="login-title"><b><b>travel</b></b>ateur</div>
                </header>
                
            </div>
        );
    }
}
 

const mapDispatchToProps = {
    login: login
  }

export default connect(null, mapDispatchToProps)(Login);
