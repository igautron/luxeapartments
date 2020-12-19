import {
    MDBCol,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBNavLink, MDBRow,
    MDBTabContent, MDBTable, MDBTableBody,
    MDBTabPane,
    MDBCarouselInner,
    MDBView,
    MDBCarouselItem,
    MDBContainer,
    MDBCarousel


} from "mdbreact";
import React from "react";

import '../Details.css'

import Item from '../../ITEMS/Item/Item';
import Lightbox from "react-image-lightbox";



class Details extends React.Component {
    state = {
        collapseID: '',
        value: 0,
        items: {
            default: '1',
        },

        product:{
            image: '',
            title: '',
            id: '',
            city: '',
            meters: '',
            category: '',
            descr: '',
            price: '',
            area: ''
        },

    }


    togglePills = (type, tab) => e => {
        e.preventDefault();
        if (this.state.items[type] !== tab) {
            let items = { ...this.state.items };
            items[type] = tab;
            this.setState({
                items
            });
        }
    };


    decrease = () => {
        this.setState ({value: this.state.value - 1 })
    }

    increase = () => {
        this.setState ({value: this.state.value + 1 })
    }

    componentDidMount(props) {
        const itemId = window.location.pathname.split('/').pop()
        fetch('http://luxapartments-server.loc/products/'+itemId)
            .then(response => response.json())
            .then(products => this.setState( {products: products.products.data}));


        const data = {
            "status": "ok",
            "product": {
                "image": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "title": "super product 1",
                "descr": "vwebertbtml",
                "price":"11.99",
                "id": "vwebertbtml",
                "city": "vwebertbtml",
                "meters": "vwebertbtml",
                "category": "vwebertbtml",
                "stage": "10",
                "terrace": "small balcony",
                "area": "center"
            },
        };
        this.setState({product: data.product});
    }


    render() {
        let image, title, descr, price, id , city, meters, category, stage, terrace;

        if (this.state.product) {
            image = this.state.product.image;
            title = this.state.product.title;
            descr = this.state.product.descr;
            price = this.state.product.price;
            id = this.state.product.id;
            city = this.state.product.city;
            meters = this.state.product.meters;
            category = this.state.product.category;
            stage = this.state.product.stage;
            terrace = this.state.product.terrace;

        }
        return (
            <div className='details-container'>
                <div className='container w-100'>
                    <div className='py-0 py-sm-5 w-100'>
                        <button type="button" className="btn btn-link float-left w-100 border-danger px-3"><MDBIcon icon="arrow-left" className='text-left float-left'/></button>
                        <div className='d-inline-flex flex-wrap w-100'>
                            <MDBCol sm='12' md='6' lg='6' xl='6' className='m-0 w-100'>
                                <div className='p-1 m-0 p-2 w-100'>
                                        <MDBCarousel
                                            activeItem={1}
                                            length={3}
                                            showControls={true}
                                            showIndicators={true}
                                            className="z-depth-1"
                                        >
                                            <MDBCarouselInner>
                                                <MDBCarouselItem itemId="1">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="First slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="2">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="Second slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="3">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="Third slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="3">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="Fourth slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="3">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="Fifth slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                                <MDBCarouselItem itemId="3">
                                                    <MDBView>
                                                        <img
                                                            className="d-block w-100"
                                                            src={image}
                                                            alt="sixth slide"
                                                        />
                                                    </MDBView>
                                                </MDBCarouselItem>
                                            </MDBCarouselInner>
                                        </MDBCarousel>
                                </div>
                            </MDBCol>
                            <MDBCol sm='12' md='6' lg='6' xl='6' className='p-2 m-0'>
                                <div className='px-3'>
                                    <h3 className='font-weight-normal'>{title}</h3>
                                    <p className='font-weight-bold py-1 m-0 '>City: <span className='font-weight-normal'>{city}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Category: <span className='font-weight-normal'>{category}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Meters(general/residential/kitchen): <span className='font-weight-normal'>{meters}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Stage: <span className='font-weight-normal'>{stage}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Terrace: <span className='font-weight-normal'>{terrace}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Description: <span className='font-weight-normal'>{descr}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Price: <span className='font-weight-normal py-1 m-0'>{price}</span>$</p>
                                    <p className='font-weight-bold py-1 pb-3 m-0 w-100'>Contact us: </p>
                                    <div className='d-inline-flex flex-wrap text-left w-100 pb-4 m-0'>
                                        <p className="text-left  w-100" >
                                            <a href='tel:+380671088799' className='price black-ic font-weight-normal'>
                                                <MDBIcon icon="phone" className="pr-3"/>
                                                +38 067 108 87 99
                                            </a>
                                        </p>
                                        <p href='#' className="text-left w-100" >
                                            <a href='tel:+380677587710' className='price black-ic font-weight-normal'>
                                                <MDBIcon icon="phone" className="pr-3"/>
                                                +38 067 758 77 10
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Details;
