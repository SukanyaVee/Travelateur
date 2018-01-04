import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Dashboard extends Component {
    constructor(props){
        super();
        this.state = {
            firstName: this.props.firstName,
            sampleJournals: [],
            samplePhotos: []
            };
        };
        // bind functions
    

    componentDidMount(){
        axios.get('http://localhost:3000/api/travelateur/photos').then(resp=>{
        this.setState({
            samplePhotos: resp.data.photos
        })
        }).catch(error=>console.log(error))

        axios.get('http://localhost:3000/api/travelateur/photos').then(resp=>{
        this.setState({
            sampleJournals: resp.data.journals
           })
        }).catch(error=>console.log(error))
    }

  render() {
    return (
        <div>
            <header className="dash-header">
                <div className="dash-title"><b>travel</b><em>ateur</em></div>
                <div className="dash-user">{this.state.firstname}</div>
            </header>
            <div>
                <p className="dash-greeting">Hi {this.state.firstname}!</p>
                <div className="add-box">
                    <button className="add-button">Add a new journal</button>
                    <button classname="addbutton">Add a new photo</button>
                </div>
            </div>
        </div>
    );
  }
}

export default Dashboard;
