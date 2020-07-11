import React, { Component } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';


class Orders extends Component {
	constructor(props){
		super(props);
		this.state = {
			orders: []
		}
	}

	componentDidMount() {
		//fetching the data from the server
		Axios.get('http://localhost:4000/orders')
		.then((response) => {
			if(response.status === 200){
				this.handleOrders(response.data);
			} else {
					alert('There is a problem with the server')
			}
		})
	}

	//handleing state function
	handleOrders = (orders) => {
		this.setState({orders: orders})
	}

	//render function for the table rows
	renderRow = (row, idx) => {
		return (
			<tr key={idx}>
				{
					Object.values(row).map( function(value, idx){
						return <td data-label = {Object.keys(row)[idx]} key={idx}>{value}</td>
					})
				}
			</tr>
		)
	}

	render() {
		const {
			renderRow
		} = this
		
		return (
			<div>
				<br/>
				<h1>Orders</h1>
				<br/>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Order number</th>
							<th>Date</th>
							<th>Customer name</th>
							<th>Quantity</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.orders.map(function(order, idx){
								return renderRow(order);
							})
						}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Orders;