import React from 'react';
import {Component} from 'react';
import './Slide.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";


import './../../Image/mainphoto.png'

import imageSrc from '../../Image/StandardLogoFiles/OriginalonTransparent.png'

class Slide extends React.Component  {
    render() {
        // let src = require('../../Image/StandardLogoFiles/OriginalonTransparent.png')
        return (
            <div>
                <div className='slide-images'>
                        <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                      >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView className="position-relative">
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                                        alt="First slide"
                                    />
                                    <div className='slide-info position-absolute'>
                                        <img src={imageSrc} />
                                        <h1>111 We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h1>
                                        <button className='slide-button py-1 px-3'>MORE</button>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView className="position-relative">
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                                        alt="Second slide"
                                    />
                                    <div className='slide-info position-absolute'>
                                        <img src={imageSrc} />
                                        <h1>222 We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h1>
                                        <button className='slide-button py-1 px-3'>MORE</button>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView className="position-relative">
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                                        alt="Third slide"
                                    />
                                    <div className='slide-info position-absolute'>
                                        <img src={imageSrc} />
                                        <h1>333 We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h1>
                                        <button className='slide-button py-1 px-3'>MORE</button>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </div>
        )
    }
}

export default Slide;