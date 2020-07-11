import React, { Component } from 'react';
import Axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class Products extends Component {
	constructor(props){
		super(props);
		this.state = {
			products: []
		}
	}

	componentDidMount() {
		//fetching the data from the server
		Axios.get('http://localhost:4000/products')
		.then((response) => {
			if(response.status === 200){
				this.handleProducts(response.data);
			} else {
				alert('There is a problem with the server')
			}
		})
	}

	//handleing state function
	handleProducts = (products) => {
		this.setState({products: products})
	}

	//render function for the cards
	renderCard = (title, subtitle, text) => {
		return(
			<Card style={{ width: '18rem' }}>
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
				<Card.Text>
					{text}
				</Card.Text>
			</Card.Body>
		</Card>
		)
	}

	render() {
		const {
			renderCard
		} = this

		return (
			<div>
				<br/>
				<h1>Products</h1>
				<br/>
				<CardColumns>
					{
						this.state.products.map(function(product){
							return renderCard(product.p_name, product.category, product.price)
						})
					}
				</CardColumns>
			</div>
		);
	}
}

export default Products;