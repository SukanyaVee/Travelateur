import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import ConnectViewer from './ConnectViewer';



export default class Connect extends Component {
    constructor(){
        super();
        this.state = {
            entries: [],
            country: ''
            };  
        this.connect = this.connect.bind(this)
        };
    

    connect(country){
        axios.get(`/api/travelateur/users/connect?country=${country}`).then(resp=>{
        this.setState({
            entries: resp.data
           })
           console.log(this.state.entries)
        }).catch(error=>console.log(error))
        
    }
 
    

    render() {

        return (
            <div>
                <div className="Viewer">
                    <h1>Where are you going next?</h1><br/>
                    <h3>Get advice on your favorite destinations from other Travelateur users </h3>
                    <input type="text" placeholder="country" onChange={e=>{this.setState({country: e.target.value})}}/>
                    <button class="big-button" onClick={e=>this.connect(this.state.country)}>Find Friends!</button>
                </div>
                <div className="gallery-container">
                {this.state.entries.map(row=><ConnectViewer row={row}/>)}
                </div>
                                {/* <div id="entry-delete"><Link to="/dashboard/gallery"><small> Back to Dashboard</small></Link></div> */}

            </div>
        )
    }
}

