import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class GalleryItem extends Component {
    render(props){
        return (this.props.entry.type === "photo" ?
                                
            <div className="entry-holder">
            <div className="trans-wrap">
                <div className="entry-body">
                    <img src={this.props.entry.image} alt={this.props.entry.title}/>
                </div>
                <b>{this.props.entry.title}</b><br/>
                {this.props.entry.location}, {this.props.entry.year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/dashboard/viewer/${this.props.entry.eid}`}>bigger</Link>
            </div>
            </div>
        :
            <div className="entry-holder">
                <div className="entry-body">
                    {this.props.entry.journal.substr(0,400)}
                </div>
                <b>{this.props.entry.title}</b><br/>
                {this.props.entry.location}, {this.props.entry.year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={`/dashboard/viewer/${this.props.entry.eid}`}><small>more</small></Link>
            </div>)
        
    }   
} 