import React, { Component } from 'react';
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../ducks/reducer';
import axios from 'axios';


class UserEdit extends Component {
    constructor(){
        super();
        this.state = {
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: ''
        };
        this.edit=this.edit.bind(this)
    }

    login(firstName, lastName, city, country, email, password){
        var user = {email: email, password:password}
        axios.put('/api/travelateur/users/login', user).then(res=>{
                this.props.login(res.data.user);
                this.browser.history.push('/dashboard');
            }).catch(error=>{
                console.log(error)
            })
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
                    
                {this.state.registered ?
                <div className="reg-container">
                    
                    <div className="align-input-fields">
                    EMAIL &emsp; <input onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD &emsp; <input onChange={event=>{this.setState({f: event.target.value})}}/> <br/><br/>
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
                    FIRST NAME &emsp; <input placeholder="this.props.user.firstName" onChange={event=>{this.setState({a: event.target.value})}}/><br/><br/>
                    LAST NAME &emsp; <input placeholder="this.props.user.lastName" onChange={event=>{this.setState({b: event.target.value})}}/><br/><br/>
                    CITY &emsp; <input placeholder="this.props.user.city" onChange={event=>{this.setState({c: event.target.value})}}/><br/><br/>
                    COUNTRY &emsp; <input placeholder="this.props.user.country" onChange={event=>{this.setState({d: event.target.value})}}/><br/><br/>
                    EMAIL &emsp; <input type="email" placeholder="this.props.user.email"  onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD &emsp; <input type="password" placeholder="this.props.user.password" onChange={event=>{this.setState({f: event.target.value})}}/> <br/><br/>            
                    </div>
                    <br/><br/>
                    <div>
                    *By clicking submit, you consent to sharing your info.<br/>
                        <button className="big-button" onClick={event=>{this.register(this.state.a, this.state.b, this.state.c,this.state.d,this.state.e,this.state.f)} }>Submit</button>  
                        <button class="small-button" onClick={event=>{this.setState({registered: true})}}>Login instead</button>
                    </div>
                </div>
                }
                </div>
            </div>
        );
    }
}
 
function mapStateToProps (state) {
    const {uid, firstName, lastName, city, country, username, password} = state
    return {uid, firstName, lastName, city, country, username, password}
}
const mapDispatchToProps = {
    login: login
  }

export default connect(null, mapDispatchToProps)(UserEdit);
