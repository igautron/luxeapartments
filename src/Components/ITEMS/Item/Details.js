import {
    MDBCol,
    MDBIcon,
    MDBNav,
    MDBNavItem,
    MDBNavLink, MDBRow,
    MDBTabContent, MDBTable, MDBTableBody,
    MDBTabPane
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
            articul: '',
            title: '',
            kind: '',
            brand: '',
            amount: '',
            appointment: '',
            type: '',
            descr2: '',
            components: '',
            price: '',
            descr3: '',
            composition: '',
            sposib: '',
        },

        gender_arr: 'defaul!!!'
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
        fetch('http://yvonne-server.loc/products/'+itemId)
            .then(response => response.json())
            .then(product => {
              this.setState({product: product.data})
              this.get_appo(product.data)
            })

        const data = {
            "status": "ok",
            "product": {
                "image": "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                "articul": "vwebertbtml",
                "title": "super product 1",
                "kind": "vwebertbtml",
                "brand": "Davines",
                "amount": "vwebertbtml",
                "appointment": "vwebertbtml",
                "type": "Шампунь",
                "descr2": "vwebertbtml",
                "components": "vwebertbtml",
                "price":"11.99",
                "gender": "vwebertbtml",
                "composition": "vwebertbtml",
                "sposib": "vwebertbtml",

            },
        };
        this.setState({product: data.product});
    }



    get_appo(product) {
        let gender_app = []
        if(product.woman) gender_app.push('для жінок')
        if(product.man)   gender_app.push('для чоловіків')
        if(product.child) gender_app.push('для дітей')
        if(product.molod) gender_app.push('для молоді')
        this.setState({gender_app: gender_app.join(', ')})
    }






    render() {
        let image, articul, title, kind, brand, amount, appointment, type, sfera, descr2, components, price, descr3, composition, sposib, country ;

        if (this.state.product) {
            image = this.state.product.image;
            articul = this.state.product.articul;
            title = this.state.product.title;
            kind = this.state.product.kind;
            brand = this.state.product.brand;
            amount = this.state.product.amount;
            appointment = this.state.product.appointment;
            type = this.state.product.type;
            sfera = this.state.product.sfera;
            descr2 = this.state.product.descr2;
            components = this.state.product.components;
            price = this.state.product.price;
            descr3 = this.state.product.descr3;
            composition = this.state.product.composition;
            sposib = this.state.product.sposib;
            country = this.state.product.country;

        }
        return (
            <div>
                <div className='container'>
                    <div className='pt-3'>
                        <button type="button" className="btn btn-link float-left w-100 border-danger"><MDBIcon icon="arrow-left" className='text-left float-left '/></button>
                        <div className='d-inline-flex '>
                            <MDBCol sm='6' md='6' lg='6' xl='5' className='m-0'>
                                <div className='p-1 m-0 p-2'>
                                    <img className='m-auto w-100 justify-content-center d-block' src={image} />
                                </div>
                            </MDBCol>
                            <MDBCol sm='6' md='6' lg='6' xl='7' className='p-2 m-0'>
                                <div className='p-2'>
                                    <h3 className='font-weight-normal'>{title}</h3>
                                    <p className='font-weight-bold py-1 m-0 grey-text'>Артикул:<span className='font-weight-normal'>{articul}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Вид товару: <span className='font-weight-normal'>{kind}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Торгівельна марка: <span className='font-weight-normal'>{brand}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Об'єм: <span className='font-weight-normal'>{amount}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Призначення: <span className='font-weight-normal'>{appointment}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Тип: <span className='font-weight-normal'>{type}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Сфера застосування: <span className='font-weight-normal'>{sfera}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Опис: <span className='font-weight-normal'>{descr2}</span></p>
                                    <p className='font-weight-bold py-1 m-0'>Активні компоненти: <span className='font-weight-normal'>{components}</span></p>
                                    <p className='bg-white p-0 green-text py-1 m-0'><span className='font-weight-bold'><i className="fas fa-check green-text font-weight-bold p-2"></i>В наявності</span></p>
                                    <p className='font-weight-bold py-1 m-0 price'>Ціна: <span className='font-weight-bold py-1 m-0'>{price}</span></p>
                                    <div className='d-inline-flex flex-wrap text-center w-100 py-4 m-0'>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1 mr-5'>В КОРЗИНУ</button>
                                        <button className='float-left m-0 item-to-cart white-text border-0 z-depth-1'>КУПИТИ</button>
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
