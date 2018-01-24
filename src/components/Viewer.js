import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';



export default class Viewer extends Component {
    constructor(){
        super();
        this.state = {
            entry: {
                // eid=0,
                // title='',
                // type='',
                // image='',
                // journal='',
                // location='',
                // year=0
            }
            };  
        };
    
    componentDidMount () {
        axios.get(`/api/travelateur/entries/get/${this.props.match.params.eid}`).then(resp=>{
            this.setState({entry: resp.data})
            console.log(this.state.entry)
        }).catch(err=>{console.log(err)})
    }
    

    render() {

        return (
            <div className="Viewer">
                <h1>{this.state.entry.title}</h1>
                <h3>{this.state.entry.location}, {this.state.entry.year}</h3>
                    {this.state.entry.type==="photo"? 
                    <div id="bigger-image"><img src={this.state.entry.image} alt={this.state.entry.title}/></div>
                : <p>{this.state.entry.journal}</p>}
                <div id="close-delete">
                    <div id="entry-delete"><Link to="/dashboard/gallery">Close</Link></div>
                    <div id="entry-delete" onClick={event=>{
                    axios.delete(`/api/travelateur/entries/${this.state.entry.eid}`).then(res=>{console.log('deleted');this.props.history.push('/dashboard/gallery')}).catch(err=>{console.log(err)})}
                    }>delete this entry</div>
                </div>
            </div>
        )
    }
}
