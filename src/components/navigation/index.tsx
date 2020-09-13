import * as React from 'react';

import {Navbar, Nav} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";

import './styles/index.css';

export class Navigation extends React.Component {
    render() {
        return (
            <Navbar id="whynow" fixed="top">
                <Navbar.Brand id="logo-name" href="/">
                        <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_100,w_150/v1593812134/eagleelevatorlogo_i8y2gt.png" alt="Eagle Elevators Ltd logo"/>
                        <div id="name">
                        <Navbar.Text id="name-main">Eagle Elevators</Navbar.Text>
                        <Navbar.Text id="name-ltd">Limited</Navbar.Text>
                        </div>
                </Navbar.Brand>
                <div id="phone-menu">
                    <p id="nav-contact">
                    <MDBIcon
                        icon="phone"
                        size="1x"
                        className="indigo-text"
                    />  +256 (414) 662-804 (24hrs)
                    </p>
                    <Nav className="ml-auto" id="menu">
                        <Nav.Link id="menu-link" href="/">Home</Nav.Link>
                        <Nav.Link id="menu-link" href="/about-us">About</Nav.Link>
                        <Nav.Link id="menu-link" href="http://localhost:3000/#container-wrap">Services</Nav.Link>
                        <Nav.Link id="menu-link" href="http://localhost:3000/#satisfied-clients">Clients</Nav.Link>
                        <Nav.Link id="menu-link" href="/projects">Projects</Nav.Link>
                        <Nav.Link id="menu-link" href="http://localhost:3000/#form-wrapper">Contact</Nav.Link>
                    </Nav>
                </div>
                    
                    {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form> */}
                {/* </Navbar.Collapse> */}
            </Navbar>
            );
    }
}