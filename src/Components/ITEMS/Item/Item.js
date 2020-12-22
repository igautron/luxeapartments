import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBLink} from "mdbreact";
import React from "react";
import {Link} from 'react-router-dom'

import './../../PRODUCTS/Products.css'

import details from './Details'

let cl = console.log

class Item extends React.Component {

    state = {

        product:{
            image: '',
            title: '',
            id: '',
            city: '',
            meters: '',
            category: '',
            descr: '',
            price: ''
        },
    }


    componentDidMount(props) {
        // const itemId = window.location.pathname.split('/').pop()


        // const data = {
        //     "status": "ok",
        //     "product": {
        //         "image": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        //         "title": "super product 1",
        //         "descr": "vwebertbtml",
        //         "price": "11.99",
        //         "id": "vwebertbtml",
        //         "city": "vwebertbtml",
        //         "meters": "vwebertbtml",
        //         "category": "vwebertbtml",
        //         "stage": "10",
        //         "terrace": "small balcony",
        //         "area": "center"
        //     },
        // };
        // this.setState({product: data.product});
    }
    render() {
        let {id, image, descr, price, title, city, meters, category, stage, terrace, area} = this.props.product;
        return (
            <MDBCard className='border-0 p-0 z-depth-2' >
                <Link to={'/details/'+id}
                      className='text-white text-center align-items-center p-0'>
                    <div className='prod-img-lux'>
                        <img
                            src={image}
                            className='img-fluid w-100'
                            alt=''
                        />
                    </div>
                    <div className='w-responsive w-100 m-0 p-0 prod-body-lux'>
                        <p className='prod-name-lux text-left font-weight-bold py-0 px-3 pb-0 mb-1 pt-2 w-100 black-ic'>{title}</p>
                        <p className='prod-city-lux text-left font-weight-bold py-0 px-3 pb-0 mb-1 w-100 black-ic'>City: <span className='font-weight-normal'>{city}</span></p>
                        <p className='prod-city-lux text-left font-weight-bold py-0 px-3 pb-0 mb-1 w-100 black-ic'>Category: <span className='font-weight-normal'>{category}</span></p>
                        <p className='prod-city-lux text-left font-weight-bold py-0 px-3 pb-0 mb-1 w-100 black-ic'>Area: <span className='font-weight-normal'>{area}</span></p>
                        <p className='prod-meters-lux text-left font-weight-bold py-0 px-3 pb-0 mb-1 w-100 black-ic'>Meters: <span className='font-weight-normal'>{meters}</span></p>
                        <p className='prod-descr-lux black-text m-0 text-left py-0 px-3 black-ic font-weight-bold'>Description: <span className='font-weight-normal'>{descr}</span></p>
                        <p className='prod-price-lux black-text py-1 text-left font-weight-bold pt-1 pb-3 px-3 m-0 black-ic'>Price: <span className='font-weight-normal'>{price} $</span></p>
                    </div>
                </Link>
            </MDBCard>
        )
    }
}

export default Item;