import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import ConnectViewer from 



export default class Connect extends Component {
    constructor(){
        super();
        this.state = {
            entries: [],
            country: ''
            };  
        this.connect = this.connect.bind(this)
        };
    

    connect(){
        axios.get(`/api/travelateur/users/connect?country=${this.state.country}`).then(resp=>{
        this.setState({
            entries: resp.data
           })
           console.log(this.state.entries)
        }).catch(error=>console.log(error))
        
    }

    

    render() {

        return (
            <div className="Viewer">
                <div>
                    Where are you looking for connections? &nbsp;&nbsp;&nbsp;
                    <input type="text" placeholder="country" onChange={e=>{this.setState({country: e.target.value})}}/>
                    <button onClick={this.connect}>Find Friends!</button>
                </div>
                {/* {this.state.entries.map(row=>{<ConnectViewer row={row}/>})} */}
            </div>
        )
    }
}

