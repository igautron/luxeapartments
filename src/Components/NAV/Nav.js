import React from 'react';
import {Component} from 'react';
import './Nav.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';

class Nav extends React.Component  {
    state = {
        collapseID: ''
    };

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        return (
            <div>
             <div className='navigation h-100'>
                 <div className='container justify-content-center h-100'>
                     <div>
                         <div className='d-inline float-left p-2'>
                             <div className='d-inline-flex pr-3 text-decoration-none font-weight-normal'><a href='tel:+380671088799' className="white-ic"><i className="fas fa-phone-alt white-ic px-2"></i>+38 (067) 108 87 99</a></div>
                             <div className='d-inline-flex text-decoration-none font-weight-normal'><a href='tel:+380677587710' className="white-ic"><i className="fab fa-viber px-2 white-ic"></i>+38 (067) 758 77 10</a></div>
                         </div>
                         <div className='d-inline float-right p-2'>
                             <div className='d-inline-flex text-white text-decoration-none font-weight-normal'><a href='#' className='white-ic'><i className='far fa-envelope px-2 text-white'></i>luxeapartments25@gmail.com</a></div>
                         </div>
                     </div>
                 </div>
             </div>
            </div>
        )
    }
}

export default Nav;