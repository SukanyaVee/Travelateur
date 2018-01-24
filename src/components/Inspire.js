import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import InspireItem from './InspireItem';

export default class Inspire extends Component {
    constructor(){
        super();
        this.state = {
            items: [],
            };  
        };
    

    componentDidMount(){

        axios.get(`https://api.unsplash.com/photos/random?client_id=fb1cc298d62ea996eec9e2709c3bc55eefffc7e3b742639e777d0a3258ce2f42&query=monuments&count=18`).then(resp=>{
        this.setState({
            items: resp.data
           })
           console.log(this.state.entries)
        }).catch(error=>console.log(error))
  
    }
   

    render() {

        return (
            <div className="Viewer">
            <h1>Inspiration Board</h1>
            <h3>A dash of mysticism and a pinch of charm</h3>
            <div className="gallery-container">
                    {this.state.items.map(item=><InspireItem key={item.id} item={item}/>)}
            </div>
            </div>
        )
    }
}
