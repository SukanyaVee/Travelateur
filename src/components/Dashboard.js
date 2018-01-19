import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import userI from './user-icon.png';
import connectI from './connect-icon.png';
import logoutI from './logout-icon.png';
import menuI from './menu-icon.png';
import Gallery from './Gallery'
import AddEntry from './AddEntry';


class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            entries: [],
            };  
        this.logout=this.logout.bind(this)
        };
    

    componentDidMount(){
        axios.get('/api/travelateur/users').catch(error=>{
            console.log('session does not exist', this.state.isLoggedIn);
            this.setState({entries: []})
            this.props.history.push('/login')
        })

        axios.get(`/api/travelateur/entries/get?uid=12`).then(resp=>{
        this.setState({
            entries: resp.data
           })
           console.log(this.state.entries)
        }).catch(error=>console.log(error))
        
  
    }

    logout(){
        axios.delete('/api/travelateur/users/logout').then(res=>{
            this.props.login(res.data);
            this.setState({entries: []})
            this.props.history.push('/')
        }).catch(error=>{console.log('error logging out')})
    }

    

    render() {
        const {user} = this.props; 

        return (
            <div className="dashboard">
                
                    <Route path='/dashboard/gallery' render={()=><Gallery  entries={this.state.entries}/>}/>
                    {/* <Route path='/dashboard/viewer'component={Viewer}/> */}
                    {/* <Route path="/dashboard/useredit" component={UserEdit}/> */}
                    <Route path='/dashboard/addentry/:type' component={AddEntry}/>
                    {/* <Route path="/dashboard/connect" component={Connect}/> */}

                <header className="all-header">
                    <div className="all-title"><Link to="/"><b>travel</b>ateur</Link></div>
                    <div className="user-box">
                    <Link to='/dashboard/useredit'><img src={userI} className="icon" width="30"/></Link>
                    <Link to='/dashboard/connect'><img src={connectI} className="icon"  width="30"/></Link>
                    <img src={logoutI} width="30"  className="icon" onClick={this.logout}/>
                    {/* <button className="small-button">Logout</button> */}
                    {/* <button className="big-button">Social</button> */}
                    </div> 
                </header>
                
                <div className="dash-greeting">
                    Hi {user.firstName} {user.lastName}!
                </div>

                <div className="add-box">
                    <Link to="/dashboard/addentry/photo"><button className="big-button">+ photo</button></Link>
                    <Link to="/dashboard/addentry/journal"><button className="big-button">+ journal</button></Link>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
  }
  export default connect(mapStateToProps)(Dashboard);