import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
// import {connect} from 'react-redux';
import GalleryItem from './GalleryItem'

export default class Gallery extends Component {

 
    render(props) {

        return (
            <div className="gallery-container">
                {this.props.entries.map(entry=><GalleryItem key={entry.eid} entry={entry}/>)}
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       user: state.user
//     }
//   }

// export default connect(mapStateToProps)(Gallery);
