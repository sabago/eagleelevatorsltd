import * as React from 'react';

import './styles/index.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { Footer } from '../footer';
import { Services } from '../services';
import { Clients } from '../clients';
import { Contact } from '../contact-us';
  
export class Home extends React.Component {
    render() {
        return (
            <div>
                <div id="introduction">
                    <div id="intro-inner">
                        <h1>Decades of <span id="intro-span">Superior Service</span></h1>
                        <h1 id='intro-h1'>A future of <span id="intro-span">Innovation</span></h1>
                    </div>
                </div>
                <div className="main">
                    <div id="our-story">
                        <h1>Our Story</h1>
                        <p>
                            Established in 1998 (as MM Building Services Ltd), we have installed and serviced 
                            more than 100 elevators for all types of commercial buildings in East Africa.
                            Eagle Elevators Limited was founded on simple principles that we strongly value. We provide 
                            the best quality and cost effective lift/elevator installations, maintenance and repair 
                            solutions with quality & reliable service. We offer unmatched expertise in a friendly yet 
                            professional manner. 
                            Eagle Elevators is the leading provider and representative of Fuji lifts in Uganda. <br/> 
                            <a href="/about-us">
                                <Button id="learnAbout" >Learn More</Button> 
                            </a>                   
                        </p> 
                    </div>
                    <div id="services">   
                        <Services/>
                    </div>  
                   
                    <div id="satisfied-clients">
                        <Clients />
                    </div>

                    <div style={{backgroundImage: "URL('https://res.cloudinary.com/sabago/image/upload/v1593823177/skyscraper-1542311_1920_rmzknh.jpg')",
                                backgroundSize: "cover",
                                backgroundAttachment: "fixed",
                                backgroundRepeat: "norepeat"}}>
                    <div id="current-projects">                        
                        <h1> Current Projects</h1>
                        <p> Projects that we are currently working on</p>
                        <Container fluid className="projects-container">
                            <Row noGutters={true} className="projects-main-row">
                                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                    <Row noGutters={true} className="projects-row">
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <h3> Services </h3>
                                            <p>Supply, installation and commissioning.</p>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <h3> Locations</h3>
                                            <span>
                                                <ol>
                                                    <li>One (1) Fuji 8 passenger lift @MBALE COURT VIEW HOTEL</li>
                                                    <li>One (1) Fuji 8 passenger lift @HADJI SSEMPIJA APARTMENT, MUYENGA</li>
                                                    <li>One (1) Fuji 21 passenger lift @SUNRISE MULTIPLE HOLDINGS, KAMWOKYA</li>
                                                </ol>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={6}>
                                    <Row noGutters={true} className="projects-row">
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <h3> Services </h3>
                                            <p>Maintenance/service </p>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <h3> Locations</h3>
                                            <span>
                                                <ol>
                                                    <li>
                                                        Two (2) Fuji lift passenger lifts each 8 persons @UGANDA COMMUNICATIONS COMMISSION
                                                    </li>
                                                    <li>
                                                        One (1) Fuji 8 person lift @NATIONAL COUNCIL FOR HIGHER EDUCTAION
                                                    </li>
                                                </ol>
                                            </span>
                                        </Col>
                                    </Row>   
                                </Col>
                            </Row>
                        </Container>
                        </div>
                    </div>
                    <div id="contact-us">
                        <Contact />
                    </div>
                    <Footer />
                    </div>
                    <div id="introduction"></div>
            </div>   
        );
    }
}