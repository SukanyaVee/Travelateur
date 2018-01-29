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
            f: '',
            g: '',
            aa: false,
            bb: false,
            cc: false,
            dd: false,
            ee: false,
            ff: false
        };
        this.edit=this.edit.bind(this)
    }

    edit(firstName, lastName, city, country, email, password, pic){
        var user = {firstName:firstName||this.props.user.firstName, lastName:lastName||this.props.user.lastName, city:city||this.props.user.city, country: country||this.props.user.country, email: email||this.props.user.email, password:password||this.props.user.password, pic:pic||this.props.user.pic}
        axios.put(`/api/travelateur/users/${this.props.user.uid}`, user).then(res=>{
                this.props.login(res.data.user);
                this.browser.history.push('/dashboard/gallery');
            }).catch(error=>{
                console.log(error)
            })
    }

    render() {
        return (
            <div className="user-edit-page">

                <div className="reg-container">
                    <big>Update your deets below</big><br/><br/>
                    <div className="align-input-fields">
                    FIRST NAME<br/>{this.props.user.firstName} &nbsp;
                    <button onClick={e=>this.setState({aa:true})}>edit</button> 
                    {this.state.aa && 
                    <input placeholder={this.props.user.firstName} onChange={event=>{this.setState({a: event.target.value})}}/>}<br/><br/>

                    LAST NAME <br/>{this.props.user.lastName} &nbsp;
                    <button onClick={e=>this.setState({bb:true})}>edit</button>
                    {this.state.bb && 
                    <input placeholder={this.props.user.lastName} onChange={event=>{this.setState({b: event.target.value})}}/>}<br/><br/>

                    CITY <br/>{this.props.user.city} &nbsp;
                    <button onClick={e=>this.setState({cc:true})}>edit</button>
                    {this.state.cc && 
                    <input placeholder={this.props.user.city} onChange={event=>{this.setState({c: event.target.value})}}/>}<br/><br/>

                    COUNTRY <br/>{this.props.user.country} &nbsp;
                    <button onClick={e=>this.setState({dd:true})}>edit</button>
                    {this.state.dd && 
                    <input placeholder={this.props.user.country} onChange={event=>{this.setState({d: event.target.value})}}/>}<br/><br/>

                    EMAIL <br/>{this.props.user.email} &nbsp;
                    <button onClick={e=>this.setState({ee:true})}>edit</button>
                    {this.state.ee && 
                    <input type="email" placeholder={this.props.user.email}  onChange={event=>{this.setState({e: event.target.value})}}/>}<br/><br/>

                    PASSWORD <br/>
                    <button onClick={e=>this.setState({ff:true})}>edit</button>
                    {this.state.ff && 
                    <input type="password"  onChange={event=>{this.setState({f: event.target.value})}}/>}<br/><br/>

                    PROFILE PIC<br/>
                    <input onChange={event=>{this.setState({g: event.target.value})}}/>
                    </div>
                    <br/><br/>
                    <div>
                    *By clicking submit, you consent to sharing your info.<br/>
                        <button className="big-button" onClick={event=>{this.edit(this.state.a, this.state.b, this.state.c,this.state.d,this.state.e,this.state.f, this.state.g)} }>Submit</button>  
                    </div>
                </div>

                <div className="prof-pic-big"><img src={this.props.user.pic} alt="prof pic"/></div>
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
