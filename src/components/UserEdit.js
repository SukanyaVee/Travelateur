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

    edit(firstName, lastName, city, country, email, password){
        var user = {firstName:firstName, lastName:lastName, city:city, country: country, email: email, password:password}
        axios.put(`/api/travelateur/users/${this.props.user.uid}`, user).then(res=>{
                this.props.login(res.data.user);
                this.browser.history.push('/dashboard/gallery');
            }).catch(error=>{
                console.log(error)
            })
    }

    render() {
        return (
            <div className="reg-container">
               
    
                Update your deets below<br/><br/>
                    
                    <div className="align-input-fields">
                    FIRST NAME <br/><input placeholder={this.props.user.firstName} onChange={event=>{this.setState({a: event.target.value})}}/><br/><br/>
                    LAST NAME <br/><input placeholder={this.props.user.lastName} onChange={event=>{this.setState({b: event.target.value})}}/><br/><br/>
                    CITY <br/><input placeholder={this.props.user.city} onChange={event=>{this.setState({c: event.target.value})}}/><br/><br/>
                    COUNTRY <br/><input placeholder={this.props.user.country} onChange={event=>{this.setState({d: event.target.value})}}/><br/><br/>
                    EMAIL <br/><input type="email" placeholder={this.props.user.email}  onChange={event=>{this.setState({e: event.target.value})}}/><br/><br/>
                    PASSWORD <br/><input type="password"  onChange={event=>{this.setState({f: event.target.value})}}/>   
                    </div>
                    <br/><br/>
                    <div>
                    *By clicking submit, you consent to sharing your info.<br/>
                        <button className="big-button" onClick={event=>{this.edit(this.state.a, this.state.b, this.state.c,this.state.d,this.state.e,this.state.f)} }>Submit</button>  
                    </div>

            </div>
        );
    }
}
 
function mapStateToProps (state) {
    return {
        user: state.user
      }
}
const mapDispatchToProps = {
    login: login
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
