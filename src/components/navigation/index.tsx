import * as React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// import { HashLink as HLink } from 'react-router-hash-link-offset';
import {Navbar, Nav} from 'react-bootstrap';
import { MDBIcon } from "mdbreact";

import './styles/index.css';

export class Navigation extends React.Component {
    scrollWithOffset = (el: any ) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -120; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    
    render() {
        return (
            <Navbar id="navbar" fixed="top">
                <Navbar.Brand id="logo-name" href="/">
                        <img alt="Eagle Elevators Ltd Logo"
                             src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_100,w_150/v1593812134/eagleelevatorlogo_i8y2gt.png"
                             />
                        <div className="name">
                        <Navbar.Text id="name-main">Eagle Elevators</Navbar.Text>
                        <Navbar.Text id="name-ltd">Limited</Navbar.Text>
                        </div>
                </Navbar.Brand>
                <div id="phone-menu">
                    <p className="nav-contact">
                    <MDBIcon
                        icon="phone"
                        size="1x"
                        className="indigo-text"
                    />  +256 (414) 662-804 (24hrs)
                    </p>
                    <Nav id="navbar-links" className="ml-automenu">
                        <Link to="/"className="menu-link">Home</Link>
                        <Link to="/about-us" className="menu-link">About</Link>
                        <Link to="/projects" className="menu-link" >Projects</Link>
                        <HashLink key="contact-us" smooth to="/#contact-us" className="menu-link" scroll={el => this.scrollWithOffset(el)}>Contact</HashLink>
                        <HashLink key="services" smooth to="/#services" className="menu-link" scroll={el => this.scrollWithOffset(el)}>Services</HashLink>
                        <HashLink key="satisfied-clients" smooth to="/#satisfied-clients" className="menu-link"scroll={el => this.scrollWithOffset(el)} >Clients</HashLink>
                    </Nav>
                </div>
            </Navbar>
            );
    }
}