import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import ConnectViewer from './ConnectViewer';
import ad from './assets/ad.jpg';


export default class Connect extends Component {
    constructor(){
        super();
        this.state = {
            places: [],
            entries: [],
            country: ''
            };  
        this.connect = this.connect.bind(this)
        };
    

    connect(country){
        axios.get(`/api/travelateur/users/connect?country=${country}`).then(resp=>{
        this.setState({
            entries: resp.data
           })
           console.log(this.state.entries)
        }).catch(error=>{console.log(error)})

        axios.get(`/api/travelateur/google/${country}`).then(resp=>{
            console.log(resp.data)
            this.setState({
                places: resp.data
            })
        }).catch(err=>{console.log(err)})
    }
 
    

    render() {

        return (
            <div>
                <div>
                    <h1>Where are you going next?</h1>
                    <h3>Explore destinations that other Travelateur users visited</h3>
                    <input type="text" placeholder="country" onChange={e=>{this.setState({country: e.target.value})}}/><span className="white-space"></span>
                    <button class="big-button" onClick={e=>this.connect(this.state.country)}>Find</button>
                </div>
                <div className="connect-container">
                    <div className="connect-sub">
                    {this.state.entries.map(row=><ConnectViewer row={row}/>)}
                    </div>

                    {this.state.places[0] && <div className="google-places">
                        <h3>Google Recommendations </h3>
                        <div className="google-place"><img src={ad} alt="ad"/></div>
                        {this.state.places.map(place=>
                        <div className="google-place">
                            <h5>{place.name}</h5>
                            <p>{place.formatted_address}</p>
                            {/* <img src={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos.photo_reference}&sensor=false&maxheight=100&maxwidth=150&key=AIzaSyBSyasS3BH40unA1E6Xk99EMVcixlwxM-0`}/> */}
                            <h6>rating: {place.rating}</h6>
                        </div>)}
                    </div>}
                </div>
            </div>
        )
    }
}

