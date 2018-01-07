import React, { Component } from 'react';
import axios from 'axios';
// import './App.css';
import {Link} from 'react-router-dom';

class AddEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
        type: this.props.match.params.type.substring(10),
        title: '',
        image: '',
        journal: '',
        location: '',
        year: 0
    };
    // bind functions
}

componentDidMount(){
    axios.get()
}

render() {

        if (this.state.type==="photo") {
            return (
                <div>
                    Title <input onChange={(e)=>{this.setState({title:e.target.value})}}/>
                    Image URL <input onChange={(e)=>{this.setState({image:e.target.value})}}/> 
                    Location <input onChange={(e)=>{this.setState({location:e.target.value})}}/> 
                    Year: <input  type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> 
                    <Link to="/dashboard">
                        <button className="add-button" onClick={event=>{               } }>Submit</button>
                    </Link>
                </div>)
        }
        else if (this.state.type==="journal"){
            return (
                <div>
                    Title <input onChange={(e)=>{this.setState({title:e.target.value})}}/>
                    Journal entry <input onChange={(e)=>{this.setState({journal:e.target.value})}}/> 
                    Location <input onChange={(e)=>{this.setState({location:e.target.value})}}/> 
                    Year: <input type="number" min="1000" max="2999" onChange={(e)=>{this.setState({year:e.target.value})}}/> 
                    <Link to="/dashboard">
                    <button className="add-button" onClick={event=>{               } }>Submit</button>
                    </Link>
                </div>)
        }
        }

    
}

export default AddEntry;
