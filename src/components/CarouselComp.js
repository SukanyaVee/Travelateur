import React, { Component } from 'react';
import  Carousel  from 'react-slick';
// import Carousel from 'nuka-carousel';
// import {Carousel} from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

export default class CarouselComp extends Component {
    render (props) {
    // mixins: [Carousel.ControllerMixin]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };
    return (
        <div >

        <Carousel {...settings}>
            {this.props.entries.map(entry=>
            {return (entry.image && <div className="whatever"><img src={entry.image} alt={entry.title}/></div>  )}
            )}
        </Carousel>
        </div>
    )
}
}