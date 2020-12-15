import React from 'react';
import {Component} from 'react';
import './Slide.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";


import './../../Image/mainphoto.png'


class Slide extends React.Component  {
    render() {
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
                                <MDBView>
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                                        alt="First slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg"
                                        alt="Second slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                    <img
                                        className="slide-image d-block w-100"
                                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg"
                                        alt="Third slide"
                                    />
                                </MDBView>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
                <div className='slide-info'>
                    <img src={require('./../../Image/Standard Logo Files/Original on Transparent.png')} />
                    <h1>We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h1>
                    <button className='slide-button py-1 px-3'>MORE</button>
                </div>
            </div>
        )
    }
}

export default Slide;