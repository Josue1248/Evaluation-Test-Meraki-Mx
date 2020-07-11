import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Products from './components/products'
import Customers from './components/customers'
import Orders from './components/orders'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return(
    <Router>
      <div>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Meraki Shop</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/customers">Customer</Nav.Link>
                <Nav.Link href="/orders">Order</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <Switch>
          <Route exact path="/home">
            <Products />
          </Route>
          <Route path="/customers">
            <Customers />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
