import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import icon from './user-icon.png'
import AddEntry from './AddEntry'

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            // uid: this.props.uid,
            // firstName: this.props.firstName,
            user: {},
            entries: []
            };
        };
        // bind functions
    

    componentDidMount(){
        axios.get('http://localhost:3000/api/travelateur/user/:id').then(resp=>{
        this.setState({
            user: resp.data.user
        })
        }).catch(error=>console.log(error))

        axios.get('http://localhost:3000/api/travelateur/entries').then(resp=>{
        this.setState({
            entries: resp.data.entries
           })
        }).catch(error=>console.log(error))
    }

    displayPJHolder(){
        this.state.entries.forEach(element => (element)=> {
            if ( element.type === "photos")
            {
                return 
                (<div className="entry-holder">
                    {element.title}
                    <div className="entry-body">
                        <img src={element.image}/>
                    </div>
                    {element.location}, {element.year}
                </div>)
                
            }
            else if (element.type === "journals")
            {
                return 
                    (<div className="entry-holder">
                        {element.title}
                        <div className="entry-body">
                            {element.journal}
                        </div>
                        {element.location}, {element.year}
                    </div>)
            }
        })

    }

  render() {
    
    return (
        <div className="dashboard">
            <header className="all-header">
                <div className="all-title"><b>travel</b>ateur</div>
                <div className="user-box">
                <Link to='/dashboard/useredit'><img src={icon} width="30"/></Link>
                </div> 
            </header>
            
            <div className="dash-greeting">
                Hi Sukanya{this.state.firstname}!
                <Link to="/dashboard/addjournal"><button className="big-button">Add a new photo</button></Link>
                <Link to="/dashboard/addjournal"><button className="big-button">Add a new journal</button></Link>
            </div>
    
            <div className="gallery-container">
            {this.displayPJHolder()}
            Check 1,2,6
            </div>
        </div>
    );
  }
}

export default Dashboard;
