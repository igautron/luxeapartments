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

import { withRouter } from 'react-router-dom';
import 'jquery';
import 'mdbreact/dist/css/mdb.css';


import Item from './../ITEMS/Item/Item'

let cl = console.log

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
			filter: {
				categories: {},
				areas: {}
			}
		}
	}

		isCatActive = (category) => {
			if (this.state.filter.categories[category]) return 'active'
			else return ''
		}

		isAreaActive = (area) => {
			if (this.state.filter.areas[area]) return 'active'
			else return ''
		}

		chooseCategory = (category) => {
			let filter = {...this.state.filter}
			if (filter.categories[category]) {
				delete filter.categories[category]
			}else{
				filter.categories[category] = 1
			}
			this.doAjax(filter)
			this.setState({filter})
		}

		changeCategory = (category) => {
			let filter = {...this.state.filter}
			filter.areas = {}
			filter.categories = {}
			filter.categories[category] = 1
			this.doAjax(filter)
			this.setState({filter})
		}

		chooseArea = (area) => {
			let filter = {...this.state.filter}
			if (filter.areas[area]) {
				delete filter.areas[area]
			}else{
				filter.areas[area] = 1
			}
			this.doAjax(filter)
			this.setState({filter})
		}

		changeArea = (area) => {
			let filter = {...this.state.filter}
			filter.areas = {}
			filter.categories = {}
			filter.areas[area] = 1
			this.doAjax(filter)
			this.setState({filter})
		}

		doAjax = (filter) => {
			let url = 'http://luxapartments-server.loc/api/filter?filter='+encodeURIComponent(JSON.stringify(filter))
			fetch(url)
					.then(response => response.json())
					.then(data => this.setState( {products: data.products}));
		}

		componentDidMount(props) {
			fetch('http://luxapartments-server.loc/api/products')
					.then(response => response.json())
					.then(data => this.setState( {products: data.products}));

			if (this.props.match.params.category) {
				this.chooseCategory(this.props.match.params.category) 
			}
			if (this.props.match.params.area) {
				this.changeArea(this.props.match.params.area) 
			}
		}

		componentDidUpdate(prevProps) {
			// cl(prevProps.match.params.category)
			// cl(this.props.match.params.category)
			if (this.props.match.params.category && prevProps.match.params.category !== this.props.match.params.category) {
				 this.changeCategory(this.props.match.params.category)
			} 
			if (this.props.match.params.area && prevProps.match.params.area !== this.props.match.params.area) {
				 this.changeArea(this.props.match.params.area) 
			} 
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
																							<MDBLink className='p-0'>
																										 <button onClick={this.chooseCategory.bind(null, 'Studio apartments')} className={'mb-1 w-100 p-0 py-2 '+this.isCatActive('Studio apartments')}>Studio apartments</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										 <button onClick={this.chooseCategory.bind(null, 'One-room apartments')} className={'mb-1 w-100 p-0 py-2 '+this.isCatActive('One-room apartments')}>One-room apartments</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										<button onClick={()=>this.chooseCategory('Two-room apartments')} className={'mb-1 w-100 p-0 py-2 '+this.isCatActive('Two-room apartments')}>Two-room apartments</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										<button onClick={this.chooseCategory.bind(null, 'Three room apartments')} className={'mb-1 w-100 p-0 py-2 '+this.isCatActive('Three room apartments')}>Three room apartments</button>
																							</MDBLink>
																					</div>
																			</div>
																			<div className='d-inline-flex d-sm-inline-flex prod-filtration-rooms my-1 w-100'>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										 <button onClick={this.chooseArea.bind(null, 'Center area')} className={'mb-1 w-100 p-0 py-2 '+this.isAreaActive('Center area')}>Center area</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0' >
																										 <button onClick={this.chooseArea.bind(null, 'Arkadia')} className={'mb-1 w-100 p-0 py-2 '+this.isAreaActive('Arkadia')}>Arkadia</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										 <button onClick={this.chooseArea.bind(null, 'Nemo')} className={'mb-1 w-100 p-0 py-2 '+this.isAreaActive('Nemo')}>Nemo</button>
																							</MDBLink>
																					</div>
																					<div className='col-3 px-1'>
																							<MDBLink className='p-0'>
																										 <button onClick={this.chooseArea.bind(null, 'Other area')} className={'mb-1 w-100 p-0 py-2 '+this.isAreaActive('Other area')}>Other area</button>
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

export default withRouter(Products);