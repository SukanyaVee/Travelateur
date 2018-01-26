import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import userI from './assets/user-icon.png';
import connectI from './assets/connect-icon.png';
import logoutI from './assets/logout-icon.png';
import inspireI from './assets/inspire-icon.png'

import {login} from '../ducks/reducer';

import Gallery from './Gallery'
import AddEntry from './AddEntry';
import UserEdit from './UserEdit';
import Viewer from './Viewer';
import Connect from './Connect';
import Inspire from './Inspire';


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            entries: [],
            };  
        this.logout=this.logout.bind(this)
        };
    

    componentDidMount(){
        axios.get('/api/travelateur/users').then(res=>{
            this.props.login(res.data);
            axios.get(`/api/travelateur/entries/get?uid=${this.props.user.uid}`).then(resp=>{
                this.setState({
                    entries: resp.data
                   })
                   console.log(this.state.entries)
                }).catch(error=>console.log(error))
        }).catch(error=>{
            console.log('session does not exist', this.state.isLoggedIn);
            this.setState({entries: []})
            this.props.history.push('/login')
        })

        // axios.get(`/api/travelateur/entries/get?uid=${this.props.user.uid}`).then(resp=>{
        // this.setState({
        //     entries: resp.data
        //    })
        //    console.log(this.state.entries)
        // }).catch(error=>console.log(error))
        
  
    }

    logout(){
        axios.delete('/api/travelateur/users/logout').then(res=>{
            this.props.login({
                uid: 0,
                firstName: '',
                lastName: '',
                city: '',
                Country: '',
                email: '',
                password: ''
            });
            console.log(this.state.user)
            this.setState({entries: []})
            this.props.history.push('/')
        }).catch(error=>{console.log('error logging out')})
    }

    

    render() {
        const {user} = this.props; 

        return (
            <div className="dashboard">
                
                <main>
                
                <div className="dash-greeting">
                    <div className="prof-pic-small"><img src={user.pic} alt=""/></div> Hi {user.firstName} {user.lastName}!
                </div>
                    <Route path='/dashboard/gallery' render={()=><Gallery  entries={this.state.entries}/>}/>
                    <Route path="/dashboard/useredit" component={UserEdit}/>
                    <Route path='/dashboard/addentry/:type' component={AddEntry}/>
                    <Route path='/dashboard/viewer/:eid' component={Viewer}/>
                    <Route path="/dashboard/connect" component={Connect}/>
                    <Route path="/dashboard/inspire" component={Inspire}/>
                </main>
                <aside className="all-header">
                    <div className="all-title"><Link to="/dashboard/gallery"><b>travel</b>ateur</Link></div>
                    <div className="user-box">
                    <Link to='/dashboard/connect'><img src={connectI} alt="connect with others" className="icon"  width="30"/></Link>
                    <Link to='/dashboard/inspire'><img src={inspireI} alt="Inspiration" className="icon"  width="30"/></Link>
                    <Link to='/dashboard/useredit'><img src={userI} alt="user edit" className="icon" width="30"/></Link>
                    <a href="javascript:;"><img src={logoutI} width="30"  alt ="logout" className="icon" onClick={this.logout}/></a>
                    </div> 
                </aside>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
  }
  const mapDispatchToProps = {
    login: login
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);