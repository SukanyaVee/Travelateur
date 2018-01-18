import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AddEntry extends Component {
    constructor(props){
        super(props);
        this.state = {
            type: this.props.match.params.type,
            title: '',
            image: '',
            journal: '',
            location: '',
            year: 0,
        };
        this.createEntry = this.createEntry.bind(this)
    }



    createEntry(title,type, image,journal,location,year){
        const entry={
            title: title,
            type: type,
            image: image,
            journal: journal,
            location: location,
            year: year,
            uid: this.props.user.uid
        }
        axios.post('/api/travelateur/entries', entry).then(entry=>{
            this.props.history.push('/dashboard');
        })
    }

    render() {

        if (this.state.type==="photo") {
            return (
                <div>
                    TITLE <input onChange={(e)=>{this.setState({title:e.target.value})}}/>
                    IMAGE URL <input onChange={(e)=>{this.setState({image:e.target.value})}}/> 
                    LOCATION (Country) <input onChange={(e)=>{this.setState({location:e.target.value})}}/> 
                    YEAR <input  type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> 
                        <button className="add-button" onClick={event=>{  this.createEntry} }>Submit</button>
                </div>)
        }
        else if (this.state.type==="journal"){
            return (
                <div>
                    TITLE <input onChange={(e)=>{this.setState({title:e.target.value})}}/>
                    JOURNAL ENTRY <input onChange={(e)=>{this.setState({journal:e.target.value})}}/> 
                    LOCATION (Country) <input onChange={(e)=>{this.setState({location:e.target.value})}}/> 
                    YEAR <input type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> 
                    <button className="add-button" onClick={event=>{this.createEntry(this.state.title, this.state.type, this.state.image, this.state.journal, this.state.location, this.state.year)} }>Submit</button>
                </div>)
        }
    }

    
}
export default AddEntry;

// const mapStateToProps = state => {
//     return {
//       user: state.user
//     }
//   }
//   export default connect(mapStateToProps)(AddEntry);