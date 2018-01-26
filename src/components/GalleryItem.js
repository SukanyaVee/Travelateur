import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class GalleryItem extends Component {
    render(props){
        return (this.props.entry.type === "photo" ?
                                
        <Link to={`/dashboard/viewer/${this.props.entry.eid}`}><div className="entry-holder">
                <div className="entry-body">
                    <img src={this.props.entry.image} alt={this.props.entry.title}/>
                </div>
                <b>{this.props.entry.title}</b><br/>
                {this.props.entry.location}, {this.props.entry.year} 
                </div></Link>
        :
        <Link to={`/dashboard/viewer/${this.props.entry.eid}`}><div className="entry-holder">
                <div className="entry-body">
                    {this.props.entry.journal.substr(0,400)}
                </div>
                <b>{this.props.entry.title}</b><br/>
                {this.props.entry.location}, {this.props.entry.year} 
            </div></Link>)
        
    }   
} 