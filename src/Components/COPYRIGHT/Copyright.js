import React from 'react';
import {Component} from 'react';
import './Copyright.css'
import {Link, BrowserRouter as Router } from 'react-router-dom';
import {MDBCol, MDBRow} from "mdbreact";


class Copyright extends React.Component  {
    render() {
        return (
            <div className='copyright my-0'>
                <div className='justify-content-center m-auto py-0'>
                    <p className='text-center m-0 py-3 font-weight-normal white-ic'>LuxeApartments, All rights reserved
                        <a href='#' className='white-ic font-weight-normal'> | Privacy Policy</a>  | <a href='#' className='white-ic font-weight-normal'>Terms of Service |</a>
                    </p>
                </div>
            </div>
        )
    }
}

export default Copyright;