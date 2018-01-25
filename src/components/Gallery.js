import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux';
import GalleryItem from './GalleryItem'

export default class Gallery extends Component {

 
    render(props) {

        return (
            <div>
                <h1>Your travel scrapbook</h1>
                <h3>A dash of mysticism and a pinch of charm</h3>
                <div className="add-box">
                    <Link to="/dashboard/addentry/photo"><button className="big-button">+ photo</button></Link>
                    <Link to="/dashboard/addentry/journal"><button className="big-button">+ journal</button></Link>
                </div>
                <div className="gallery-container">
                    {this.props.entries.map(entry=><GalleryItem key={entry.eid} entry={entry}/>)}
                </div>
            </div>
        )
    }
}

 