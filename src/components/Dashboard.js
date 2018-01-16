import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import icon from './user-icon.png';
import {connect} from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            entries: []
            };
        };
        // bind functions
    

    componentDidMount(){
        // axios.get(`http://localhost:3000/api/travelateur/user/:${uid}`).then(resp=>{
        // this.setState({
        //     user: resp.data.user
        // })
        // }).catch(error=>console.log(error))

        axios.get(`http://localhost:3000/api/travelateur/entries?userid=${this.props.user.id}`).then(resp=>{
        this.setState({
            entries: resp.data.entries
           })
        }).catch(error=>console.log(error))
    }

    displayHolder(){
        for (let i=this.state.entries.length;i>this.state.entries.length-9;i--)
        {
            this.state.entries[i].type === "photos"?
            
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
    

  render() {
    const user = this.props.user;

     
    return (
        <div className="dashboard">
            <header className="all-header">
                <div className="all-title"><b>travel</b>ateur</div>
                <div className="user-box">
                <Link to='/dashboard/useredit'><img src={icon} width="30"/></Link>
                </div> 
            </header>
            
            <div className="dash-greeting">
                Hi Sukanya{this.state.firstname}!
            </div>
            <div className="add-box">
                <Link to="/dashboard/addjournal" uid={this.props.user.uid}><button className="big-button">Add a new photo</button></Link>
                <Link to="/dashboard/addjournal" uid={this.props.user.uid}><button className="big-button">Add a new journal</button></Link>
            </div>
    
            <div className="gallery-container">
            {this.displayHolder()}
            Check 1,2,6
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
  }
  export default connect(mapStateToProps)(Dashboard);