import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
// import {connect} from 'react-redux';

import Gallery from './Gallery'
import AddEntry from './AddEntry';
import UserEdit from './UserEdit';


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
                    <img src={this.state.entry.image}/>
                : <p>{this.state.entry.journal}</p>}

                <Link to="/dashboard/gallery">Close</Link>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//       user: state.user
//     }
//   }
//   const mapDispatchToProps = {
//     login: login
//   }

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);