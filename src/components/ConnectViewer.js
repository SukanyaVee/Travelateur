import React, { Component } from 'react';
// import {Link} from 'react-router-dom';


export default function ConnectViewer(props) {
        return (props.row.type === "photo" ?
                                
            <div className="entry-holder">
                <div className="entry-body">
                    <img src={props.row.image} alt={props.row.title}/> 
                </div>
                <div><b>{props.row.title}</b><br/></div>
                <div id="user-deets"><div className="prof-pic-small"><img src={props.row.pic} alt="owner"/></div>{props.row.firstname} {props.row.lastname} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Connect</a></div>
            </div>
            :
            <div className="entry-holder">
                <div className="entry-body">
                    {props.row.journal.substr(0,400)}
                </div>
                <div><b>{props.row.title}</b><br/></div>
                <div id="user-deets"><div className="prof-pic-small"><img src={props.row.pic} alt="owner"/></div>{props.row.firstname} {props.row.lastname} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="">Connect</a></div>
            </div>
        )

} 