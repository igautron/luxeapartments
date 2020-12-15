import React from 'react';
import {Component} from 'react';
import './Footer.css'
import {Link, BrowserRouter as Router, NavLink} from 'react-router-dom';
import {MDBBtn, MDBCol, MDBRow, MDBInput } from "mdbreact";


const logoImage = './Image/StandardLogoFiles/OriginalonTransparent.png'


class Footer extends React.Component  {

    render() {
        return (
           <div>
               <div className='w-100 container-footer'>
                   <div className='container justify-content-center m-auto h-100'>
                       <div className='d-inline-flex w-100 h-100'>
                           <MDBRow className='flex-wrap w-100'>
                               <MDBCol className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 px-0 pl-xl-3 pl-lg-3 pl-md-3 pl-sm-3 pl-4'>
                                   <div className='footer-logo'>
                                        <img className='w-100 pt-5 pb-4' src={logoImage} />
                                   </div>
                                   <p className='font-weight-normal white-text footer-slogan'>Our resource exists in order to provide you with a comfortable stay in the beautiful city of Odessa.</p>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 pt-5 pl-0 pl-sm-0 pl-md-5 pl-lg-5 pl-xl-5  pr-0'>
                                   <h4 className='white-ic pl-5 py-3'>NAVIGATION</h4>
                                   <NavLink to='/home'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Home</a></p>
                                   </NavLink>
                                   <NavLink to='/about'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>About</a></p>
                                   </NavLink>
                                   <NavLink to='/contacts'>
                                       <p className='pl-5 py-1 m-0'><a href='#' className='white-text'>Contacts</a></p>
                                   </NavLink>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 py-5 pr-0 px-0'>
                                   <h4 className='white-ic py-3 pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'>CATEGORIES</h4>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Studio apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>One-room apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Double-room apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Three-room apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Three-room apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Apartments in Center</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Arkadia area apartments</a></p>
                                   <p className='pl-4 pl-xl-5 pl-lg-5 pl-md-5 pl-sm-3'><a href='#' className='white-ic'>Nemo area apartments</a></p>
                               </MDBCol>
                               <MDBCol className='col-6 col-sm-6 col-md-6 col-lg-3 col-xl-3 py-5 px-0'>
                                   <h4 className='white-ic white-ic pl-4 py-3 pb-2'>CONTACTS</h4>
                                   <p className='white-ic pl-4'><i className="fas fa-phone pr-2 white-ic"></i>+38 (067) 108 87 99</p>
                                   <p className='white-ic pl-4'><i className="fas fa-phone pr-2 white-ic"></i>+38 (067) 758 77 10</p>
                                   <p className='white-ic pl-4'><i className='far fa-envelope pr-2 white-ic'></i>luxeapartments25@gmail.com</p>
                               </MDBCol>
                           </MDBRow>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Footer;