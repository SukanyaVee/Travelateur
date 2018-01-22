import React from 'react';
import {Link} from 'react-router-dom';

export default function GalleryItem (props){

                return (props.entry.type === "photo" ?
                                      
                    <div className="entry-holder">
                        <b>{props.entry.title}</b>
                        <div className="entry-body">
                            <img src={props.entry.image}/>
                        </div>
                        {props.entry.location}, {props.entry.year}
                    </div>
                :
                    <div className="entry-holder">
                        <b>{props.entry.title}</b>
                        <div className="entry-body">
                            {props.entry.journal.substr(0,250)}
                        </div>
                        {props.entry.location}, {props.entry.year} &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={`/dashboard/viewer/${props.entry.eid}`}><b>+</b></Link>
                    </div>)
                    
            
            // return {x}
            // for (let i=props.entries.length-1;i>props.entries.length-3&&i>=0;i--)
            // {
            //     console.log(props.entries[i])
            //      props.entries[i].type === "photo" ?
                    
                    
            //         <div className="entry-holder">
            //             {props.entries[i].title}
            //             <div className="entry-body">
            //                 <img src={props.entries[i].image}/>
            //             </div>
            //             {props.entries[i].location}, {props.entries[i].year}
            //         </div>
            //     :
            //         <div className="entry-holder">
            //             {props.entries[i].title}
            //             <div className="entry-body">
            //                 {props.entries[i].journal.substring(0,100)}
            //             </div>
            //             {props.entries[i].location}, {props.entries[i].year}
            //         </div>
            // }
        
}