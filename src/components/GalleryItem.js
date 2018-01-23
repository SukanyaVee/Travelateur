import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {Route} from 'react-router-dom';

export default class GalleryItem extends Component {
    render(props){
        return (this.props.entry.type === "photo" ?
                                
            <div className="entry-holder">
                <b>{this.props.entry.title}</b>
                <div className="entry-body">
                    <img src={this.props.entry.image}/>
                </div>
                {this.props.entry.location}, {this.props.entry.year}
            </div>
        :
            <div className="entry-holder">
                <b>{this.props.entry.title}</b>
                <div className="entry-body">
                    {this.props.entry.journal.substr(0,300)}
                </div>
                {this.props.entry.location}, {this.props.entry.year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/dashboard/viewer/${this.props.entry.eid}`}><b>+</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id="entry-delete" onClick={event=>{
                    axios.delete(`/api/travelateur/entries/${this.props.entry.eid}`).then(res=>{console.log('deleted');this.props.history.push('/dashboard/gallery')}).catch(err=>{console.log(err)})}
                    }><b>x</b></span>
            </div>)
        
    }   
}