import React, { Component } from 'react';
import {Link} from 'react-router-dom'
// import {connect} from 'react-redux';
import GalleryItem from './GalleryItem'

export default class Gallery extends Component {

 
    render(props) {

        return (
            <div>
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

 