import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import userI from './user-icon.png';
import connectI from './connect-icon.png';
import logoutI from './logout-icon.png';
import menuI from './menu-icon.png';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(){
        super();
        this.state = {
            entries: [],
            isLoggedIn: false
            };
        this.logout=this.logout.bind(this)
        this.displayHolder=this.displayHolder.bind(this)    
        };
    

    componentDidMount(){
        // axios.get('/api/travelateur/users').catch(error=>{
        //     console.log('session does not exist', this.state.isLoggedIn);
        //     this.props.history.push('/login')
        // })

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
            this.props.history.push('/')
        }).catch(error=>{console.log('error logging out')})
    }

    // someFunc(){
    //     console.log('xyz')
    //     ,this.displayHolder)
            

            

    //     // this.displayHolder();
    //     }).catch(error=>console.log(error))}

    displayHolder(){
        console.log(this.state.entries)
        if (this.state.entries[0])
        {
            for (let i=this.state.entries.length-1;i>this.state.entries.length-3&&i>=0;i--)
            {
                console.log(this.state.entries[i])
                this.state.entries[i].type === "photo"?
                    
                    <div className="entry-holder">
                        {this.state.entries[i].title}
                        <div className="entry-body">
                            <img src={this.state.entries[i].image}/>
                        </div>
                        {this.state.entries[i].location}, {this.state.entries[i].year}
                    </div>
                :
                    <div className="entry-holder">
                        {this.state.entries[i].title}
                        <div className="entry-body">
                            {this.state.entries[i].journal.substring(0,100)}
                        </div>
                        {this.state.entries[i].location}, {this.state.entries[i].year}
                    </div>
                }
            }
        }
    

    render() {
        const {user} = this.props;

        return (
            <div className="dashboard">
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
                
                <div className="gallery-container">
                {this.displayHolder} 
                Check 1,2,6
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