import React from 'react';
import {Component} from 'react';
import './Slide.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";

import imageSrc from '../../Image/StandardLogoFiles/OriginalonTransparent.png'
import slideImage from '../../Image/90.jpg'
import slideImage2 from '../../Image/90mobile.jpg'

class Slide extends React.Component  {
    render() {
        return (
            <div>
                <div>
                        <MDBCarousel
                        activeItem={1}
                        length={1}
                        showControls={false}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                      >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView className="position-relative">
                                    <img
                                        className="slide-image d-none d-sm-block w-100 h-100"
                                        src={slideImage}
                                        alt="First slide"
                                    />
                                    <img
                                        className="slide-image d-block d-sm-none w-100 h-100"
                                        src={slideImage2}
                                        alt="First slide"
                                    />
                                    <MDBMask overlay="black-strong" className="flex-center mask-overlay">
                                </MDBMask>
                                    <div className='slide-info position-absolute w-100'>
                                        <div className='slide-navigation w-100'>
                                            <div className='slide-nav m-auto justify-content-center w-100 px-3 px-sm-0'>
                                                <div className='w-100 d-inline-flex justify-content-between '>
                                                    <Link to='/' className='white-ic list-unstyled p-1 p-sm-2 nav-text'>
                                                        Home
                                                    </Link>
                                                    <Link to='/about' className='white-ic list-unstyled p-1 p-sm-2 nav-text'>
                                                        About
                                                    </Link>
                                                    <Link to='/contacts' className='white-ic list-unstyled p-1 p-sm-2 nav-text'>
                                                        Contacts
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <img className='w-responsive logo-image py-3 py-sm-4 py-md-4 py-lg-4 m-auto justify-content-center' src={imageSrc} />
                                        <h2 className='w-50 justify-content-center m-auto white-ic text-center slide-title'>We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h2>
                                        <div>
                                            <Link to='/about'>
                                                <button className='slide-button  py-sm-1 py-md-2 py-lg-2  px-sm-3 px-md-5 mx-auto d-block my-3 my-sm-4 my-md-5 my-lg-5 z-depth-1 nav-text white-ic'>
                                                    More
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </MDBView>
                            </MDBCarouselItem>
                            {/*<MDBCarouselItem itemId="2">*/}
                            {/*    <MDBView className="position-relative">*/}
                            {/*        <img*/}
                            {/*            className="slide-image d-block w-100"*/}
                            {/*            src={slideImage}*/}
                            {/*            alt="First slide"*/}
                            {/*        />*/}
                            {/*        <MDBMask overlay="black-strong" className="flex-center mask-overlay">*/}
                            {/*        </MDBMask>*/}
                            {/*        <div className='slide-info position-absolute w-100'>*/}
                            {/*            <div className='slide-navigation'>*/}
                            {/*                <div className='slide-nav m-auto justify-content-center'>*/}
                            {/*                    <div className='w-100 d-inline-flex justify-content-between'>*/}
                            {/*                        <Link to='/home' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            Home*/}
                            {/*                        </Link>*/}
                            {/*                        <Link to='/about' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            About*/}
                            {/*                        </Link>*/}
                            {/*                        <Link to='/contacts' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            Contacts*/}
                            {/*                        </Link>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <img className='logo-image py-5 m-auto justify-content-center' src={imageSrc} />*/}
                            {/*            <h2 className='w-50 justify-content-center m-auto white-ic text-center'>We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h2>*/}
                            {/*            <div>*/}
                            {/*                <Link to='/about'>*/}
                            {/*                     <button className='slide-button py-2 px-5 mx-auto d-block my-5 z-depth-1 nav-text white-ic'>More</button>*/}
                            {/*                </Link>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*    </MDBView>*/}
                            {/*</MDBCarouselItem>*/}
                            {/*<MDBCarouselItem itemId="3">*/}
                            {/*    <MDBView className="position-relative">*/}
                            {/*        <img*/}
                            {/*            className="slide-image d-block w-100"*/}
                            {/*            src={slideImage}*/}
                            {/*            alt="First slide"*/}
                            {/*        />*/}
                            {/*        <MDBMask overlay="black-strong" className="flex-center mask-overlay">*/}
                            {/*        </MDBMask>*/}
                            {/*        <div className='slide-info position-absolute w-100'>*/}
                            {/*            <div className='slide-navigation'>*/}
                            {/*                <div className='slide-nav m-auto justify-content-center'>*/}
                            {/*                    <div className='w-100 d-inline-flex justify-content-between'>*/}
                            {/*                        <Link to='/home' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            Home*/}
                            {/*                        </Link>*/}
                            {/*                        <Link tp='about' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            About*/}
                            {/*                        </Link>*/}
                            {/*                        <Link to='contacts' className='white-ic list-unstyled p-2 nav-text'>*/}
                            {/*                            Contacts*/}
                            {/*                        </Link>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <img className='logo-image py-5 m-auto justify-content-center' src={imageSrc} />*/}
                            {/*            <h2 className='w-50 justify-content-center m-auto white-ic text-center'>We offer the best apartments in the most attractive districts of Odessa to ensure your comfort</h2>*/}
                            {/*            <div>*/}
                            {/*                <Link to='/about'>*/}
                            {/*                      <button className='slide-button py-2 px-5 mx-auto d-block my-5 z-depth-1 nav-text white-ic'>More</button>*/}
                            {/*                </Link>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}

                            {/*    </MDBView>*/}
                            {/*</MDBCarouselItem>*/}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </div>
        )
    }
}

export default Slide;