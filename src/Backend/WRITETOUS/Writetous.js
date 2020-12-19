import React from 'react';

import {  MDBRow,  MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

import './Writetous.css'

class Contactform extends React.Component {

    state = {
        form: {
            name: 'Olena',
            email: 'example@gmail.com',
            phone: '+380670000000',
            company: 'OlenaGroup',
            message: 'How can I get product?',
            'send-telegram':1,
        },
        alert: ''
    }

    initial_state = {
        form: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            'send-telegram':1,
        },
        alert: ''
    }

    changeInputHandler = (event) => {
        let formData = {...this.state.form}
        formData[event.target.name] = event.target.value
        this.setState({form: formData})
    }

    formSubmit = () => {

        if (this.state.form.name.trim() === '') {
            this.setState({alert: 'Введіть ім`я!'})
            return false
        }
        if (this.state.form.email.trim() === '') {
            this.setState({alert: 'Введіть email!'})
            return false
        }

        let url = 'http://luxe-apartments.com/telegram/'
        fetch(url, {
            method: 'POST', // или 'PUT'
            body: new URLSearchParams(this.state.form).toString(), // данные могут быть 'строкой' или {объектом}!
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            if (data.ok) {
                this.setState({form:this.initial_state.form, alert: 'Повідомлення відправлено!'})
            }
        });
    }

    render() {
        return (
            <div>
                <div className='container  justify-content-center m-auto pb-5 contacts w-100'>
                    <div className='price w-100 m-auto justify-content-center'>
                        <h3 className='h3-responsive  pt-3 pt-sm-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>Message form</h3>
                        <MDBCard className='p-0 p-sm-3 m-auto justify-content-center contact-card'>
                            <MDBRow className='pt-0'>
                                <div lg="12" className='w-100'>
                                    <MDBCardBody className="form">
                                        <p className='text-center contact-text'>
                                            <MDBIcon icon="envelope" className="pr-2 py-4" />
                                            Write to us:
                                        </p>
                                        <p className='px-3' style={{color:'green'}}>{this.state.alert}</p>
                                      <div className='pt-3'>
                                        <div className='d-inline-flex flex-wrap px-3 mb-0 mb-sm-4 h-100 w-100 col-contact'>
                                                <div className='w-50 px-3 contact-area'>
                                                    <div className="md-form m-0 h-100">
                                                        <MDBInput
                                                            type="textarea"
                                                            id="form-contact-name"
                                                            label="Your name"
                                                            name='name'
                                                            value={this.state.form.name}
                                                            onChange={this.changeInputHandler}
                                                            className='w-100'
                                                        />
                                                    </div>
                                            </div>
                                            <div className='w-50 px-3 contact-area'>
                                                <div className="md-form m-0 h-100">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-email"
                                                        label="Your email"
                                                        name='email'
                                                        value={this.state.form.email}
                                                        onChange={this.changeInputHandler}
                                                        className='w-100'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-inline-flex flex-wrap px-3 mb-0 mb-sm-4 h-100 w-100 col-contact'>
                                            <div className='w-50 px-3 contact-area'>
                                                <div className="md-form m-0">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-phone"
                                                        label="Your phone"
                                                        name='phone'
                                                        value={this.state.form.phone}
                                                        onChange={this.changeInputHandler}
                                                        className='w-100'
                                                    />
                                                </div>
                                            </div>
                                            <div className='w-50 px-3 contact-area'>
                                                <div className="md-form m-0 h-100">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-company"
                                                        label="Your company"
                                                        name='company'
                                                        value={this.state.form.company}
                                                        onChange={this.changeInputHandler}
                                                        className='w-100'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-3 mb-4 h-100'>
                                            <div className="w-100 px-3 ">
                                                <div className="md-form m-0 h-100">
                                                    <MDBInput
                                                        type="textarea"
                                                        id="form-contact-message"
                                                        label="Ваше повідомлення"
                                                        name='message'
                                                        value={this.state.form.message}
                                                        onChange={this.changeInputHandler}
                                                        className='w-100'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                      </div>
                                        <MDBBtn onClick={this.formSubmit} rounded className='btn-submit mb-3 justify-content-center m-auto d-block'>
                                             Надіслати
                                        </MDBBtn>
                                    </MDBCardBody>
                                </div>
                            </MDBRow>
                        </MDBCard>
                    </div>
                </div>
            </div>
        )
    }
};

export default Contactform;