import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export class Header extends Component {
  render() {
    return (
        <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Portefeuille</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass='span'>
              <Link to="/">Wallet</Link>
            </NavItem>
            <NavItem componentClass='span'>
              <Link to="/expense">Expense</Link>
            </NavItem>         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}