import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import {connect} from 'react-redux';
// import userI from './user-icon.png';
// import connectI from './connect-icon.png';
// import logoutI from './logout-icon.png';
// import menuI from './menu-icon.png';


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

    // componentDidMount(){
    //     axios.get('/api/travelateur/users').catch(error=>{
    //         console.log('session does not exist', this.state.isLoggedIn);
    //         this.props.history.push('/login')
    //     })
    // }

    createEntry(title, image,journal,location,year){
        console.log(this.props.user.uid)
        const entry={
            title: title,
            type: this.props.match.params.type,
            image: image,
            journal: journal,
            location: location,
            year: year,
            uid: this.props.user.uid
        }
        axios.post('/api/travelateur/entries', entry).then(entry=>{
            this.props.history.push('/dashboard/gallery');
        })
    }

    render() {

        if (this.props.match.params.type==="photo") {
            return (
                <div className="Viewer">
                    TITLE <input onChange={(e)=>{this.setState({title:e.target.value})}}/><br/><br/>
                    IMAGE URL <input onChange={(e)=>{this.setState({image:e.target.value})}}/> <br/><br/>
                    LOCATION (Country) <input onChange={(e)=>{this.setState({location:e.target.value})}}/> <br/><br/>
                    {/* Use Dropzone or react s3 uploader instead */}
                    YEAR <input  type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> <br/><br/>
                        <button className="add-button" onClick={event=>{  this.createEntry(this.state.title,  this.state.image, this.state.journal, this.state.location, this.state.year)} }>Submit</button>
                </div>)
        }
        else if (this.state.type==="journal"){
            return (
                <div className="Viewer">
                    this.props.user.uid {this.props.user.uid}
                    TITLE <input onChange={(e)=>{this.setState({title:e.target.value})}}/><br/><br/>
                    JOURNAL ENTRY <textarea maxlength="1000" id="journal-textbox" onChange={(e)=>{this.setState({journal:e.target.value})}}> </textarea><br/><br/>
                    LOCATION (Country) <input onChange={(e)=>{this.setState({location:e.target.value})}}/> <br/><br/>
                    YEAR <input type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> <br/><br/>
                    <button className="add-button" onClick={event=>{this.createEntry(this.state.title,  this.state.image, this.state.journal, this.state.location, this.state.year)} }>Submit</button>
                </div>)
        }
    }
}

const mapStateToProps = state => {
    return {
      user: state.user
    }
  }

export default connect(mapStateToProps)(AddEntry);
