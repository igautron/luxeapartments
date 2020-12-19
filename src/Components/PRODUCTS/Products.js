import React from 'react';
import './Products.css'


import {
    MDBRow,
    MDBCol,
    MDBPagination,
    MDBPageNav,
    MDBPageItem,
    MDBLink
} from 'mdbreact';

import 'jquery';
import 'mdbreact/dist/css/mdb.css';


import Item from './../ITEMS/Item/Item'


class Products extends React.Component  {

  constructor(props) {
        super(props)


     this.state = {
        collapseID: '',
        value: 0,
        items: {
            default: '1',
        },
             products: [],
    }


  }


    componentDidMount(props) {
        fetch('http://yvonne-server.loc/api/products')
            .then(response => response.json())
            .then(products => this.setState( {products: products.products.data}));
    }

    chooseTopHandle = (type) => {
        // this.props.setFilterTop(type)
    }

    isActive = (type) => {
        const category = window.location.pathname.split('/').pop()
        return category === type ? 'active' : ''
    }



    render() {
        return (
              <div>
                  <div className='products w-100'>
                      <div className='container px-sm-2 px-md-2 px-lg-1 px-xl-1 w-100'>
                          <h3 className='h3-responsive  pt-3 pt-sm-5 mb-0 pb-3 pb-md-5 pb-xl-5 pb-lg-5 font-weight-bold text-center'>
                              Apartments
                          </h3>
                          <MDBRow className='d-flex w-responsive w-100 pb-2 m-auto justify-content-center'>
                              <MDBCol className='col-12 px-0 px-sm-1 m-0 w-100'>
                                  <div>
                                      <div className='d-inline-flex d-sm-inline-flex prod-filtration-rooms my-1 w-100'>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/studio" className='p-0'>
                                                     <button onClick={this.chooseTopHandle.bind(null, 'studio')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('studio')}>Studio apartments</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/oneroom" className='p-0'>
                                                     <button onClick={this.chooseTopHandle.bind(null, 'oneroom')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('oneroom')}>One-room apartments</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/tworoom" className='p-0'>
                                                    <button onClick={this.chooseTopHandle.bind(null, 'tworoom')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('tworoom')}>Two-room apartments</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/threeroom" className='p-0'>
                                                    <button onClick={this.chooseTopHandle.bind(null, 'threeroom')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('threeroom')}>Three room apartments</button>
                                              </MDBLink>
                                          </div>
                                      </div>
                                      <div className='d-inline-flex d-sm-inline-flex prod-filtration-rooms my-1 w-100'>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/center" className='p-0'>
                                                     <button onClick={this.chooseTopHandle.bind(null, 'center')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('center')}>Center area</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/arkadia" className='p-0' >
                                                     <button onClick={this.chooseTopHandle.bind(null, 'arkadia')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('arkadia')}>Arkadia</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/nemo" className='p-0'>
                                                     <button onClick={this.chooseTopHandle.bind(null, 'nemo')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('nemo')}>Nemo</button>
                                              </MDBLink>
                                          </div>
                                          <div className='col-3 px-1'>
                                              <MDBLink to="/category/other" className='p-0'>
                                                     <button onClick={this.chooseTopHandle.bind(null, 'other')} className={'mb-1 w-100 p-0 py-2 '+this.isActive('other')}>Other area</button>
                                              </MDBLink>
                                          </div>
                                      </div>
                                  </div>
                              </MDBCol>
                              <MDBCol className='col-12 px-0 px-sm-0 py-sm-4'>
                                  <div>
                                      <MDBRow className='p-0 m-0 my-sm-5 my-2 ml-0 border-0 products'>
                                          {this.state.products.map((product) => (
                                              <MDBCol key={product.id} lg='6' md='6' xl='4' className='pb-3 p-1 p-sm-2 mb-0 mb-sm-4'>
                                                  <Item product={product}/>
                                              </MDBCol>
                                          ))}
                                      </MDBRow>
                                  </div>
                              </MDBCol>
                          </MDBRow>
                      </div>
                  </div>
              </div>
        )
    }
}

export default Products;