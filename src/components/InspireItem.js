import React, { Component } from 'react';


export default function InspireItem (props) {
    return (
        <div className="entry-holder">
            <b>{props.item.user.location}</b>
            <div className="entry-body">
                <img src={props.item.urls.regular} alt={props.item.user.location}/>
            </div>
            <small><a href={props.item.user.links.portfolio}>{props.item.user.name}</a> on Unsplash</small>
        </div>
    )
}