import React, { Component } from 'react';
import Axios from 'axios';
import Table from 'react-bootstrap/Table';


class Customers extends Component {
	constructor(props){
		super(props);
		this.state = {
				customers: []
		}
	}
	
	componentDidMount() {
		//fetching the data from the server
		Axios.get('http://localhost:4000/customers')
		.then((response) => {
			if(response.status === 200){
				this.handleCustomers(response.data);
			} else {
					alert('There is a problem with the server')
			}
		})
	}

	//handleing state function
	handleCustomers = (customers) => {
		this.setState({customers: customers})
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
				<h1>Customers</h1>
				<br/>
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{
							this.state.customers.map(function(customer, idx){
								return renderRow(customer, idx);
							})
						}
					</tbody>
				</Table>
			</div>
		);
	}
}

export default Customers;