import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class Header extends Component {
  render() {
    return (
        <div>
        <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="#">
              Wallet
            </NavItem>
            <NavItem href="#">
              Expense
            </NavItem>         
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    );
  }
}