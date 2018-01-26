import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
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
        this.createEntry = this.createEntry.bind(this);
        this.findLoc = this.findLoc.bind(this);
    }


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

    findLoc(){
        var output = document.getElementById("maps");

          if(navigator.geolocation) {        
            var geosuccess = position => {
                var latitude  = position.coords.latitude;
                var longitude = position.coords.longitude;
                var x=''; 
                // var img = new Image();
                // img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";
                // output.appendChild(img);
                //spot to use lat long to find country
                // console.log('hello')
                axios.post(`/api/travelateur/googles`, {latitude:latitude, longitude: longitude}).then(resp=>{
                    x=resp.data
                    var y= x.address_components.findIndex(elem=>elem.types[0]=="country")
                    console.log('country',x.address_components[y].long_name)
                    this.setState({location: x.address_components[y].long_name})
                    output.innerHTML = 'You are at '+ x.formatted_address+' </p>';
                }).catch(err=>{console.log(err)})

            }
            var error=()=> {
                output.innerHTML = "Unable to retrieve your location";
            }
            navigator.geolocation.getCurrentPosition(geosuccess, error);
        }
        else {
            output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
        }
    }

    render() {

        if (this.props.match.params.type==="photo") {
            return (
                <div className="reg-container">
                    <div className="align-input-fields">
                        TITLE<br/> <input onChange={(e)=>{this.setState({title:e.target.value})}}/><br/><br/>
                        IMAGE URL <br/><input onChange={(e)=>{this.setState({image:e.target.value})}}/> <br/><br/>
                        {/* Use Dropzone or react s3 uploader instead */}
                        LOCATION (Country)<br/> <button className="small-button" onClick={this.findLoc}></button><br/><br/>
                        {/* USING BUTTON above INTEAD OF INPUT <input onChange={(e)=>{this.setState({location:e.target.value})}}/> <br/><br/> */}
                        <div id="maps"></div>
                        YEAR <br/><input  type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/>
                    </div><br/><br/>
                        <button className="big-button" onClick={event=>{  this.createEntry(this.state.title,  this.state.image, this.state.journal, this.state.location, this.state.year)} }>Submit</button>
                </div>)
        }
        else if (this.state.type==="journal"){
            return (
                <div className="reg-container">
                    <div className="align-input-fields">
                        TITLE <br/><input onChange={(e)=>{this.setState({title:e.target.value})}}/><br/><br/>
                        JOURNAL ENTRY <br/><textarea maxlength="1000" id="journal-textbox" onChange={(e)=>{this.setState({journal:e.target.value})}}> </textarea><br/><br/>
                        LOCATION (Country)<br/> <button className="small-button" onClick={this.findLoc}>Find Location</button><br/><br/>
                        {/* USING BUTTON above INTEAD OF INPUT <input onChange={(e)=>{this.setState({location:e.target.value})}}/> <br/><br/> */}
                        <div id="maps"></div>
                        YEAR <br/><input type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/>
                    </div><br/><br/>
                    <button className="big-button" onClick={event=>{this.createEntry(this.state.title,  this.state.image, this.state.journal, this.state.location, this.state.year)} }>Submit</button>
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
