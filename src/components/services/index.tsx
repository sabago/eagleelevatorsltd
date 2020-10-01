import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/index.css';

export class Services extends React.Component {
    render() {
        return (
            <>
            <Container className="services-container">
            <h1 className="services-home" style={{color: "white"}}> Services</h1>
            <h3 className="services-home"> We specialize in the following services</h3>
            <Row noGutters={true} id="services-row" >
                <Col className="services-col" xs={12} sm={12} md={6} >
                    <div className="img-wrapper arrow-right">
                        <div className="img-wrapper arrow-right">
                            <img 
                                alt="skyscrapper"
                                width="100%" height="auto"
                                src="https://res.cloudinary.com/sabago/image/upload/v1598206080/elevator-new_qn4sqr.jpg">
                            </img>
                        </div>
                    </div>
                </Col>
                <Col className="services-col" xs={12} sm={12}  md={6}>
                    <span className="icon-title">
                        <img 
                            alt="installation icon"
                            src="https://res.cloudinary.com/sabago/image/upload/c_scale,h_48,w_48/v1598550138/installation_icon_nfinuy.png">
                        </img>
                        <h2 id="installation-h1"> Installation </h2>
                    </span>
                    <p>
                        We offer new installation for commercial, and 
                        residential buildings, as well as several 
                        accessibility equipment. We accomodate elevator 
                        installation requirements for any type of 
                        building and application.
                    </p>
                </Col>
                </Row>
                <Row id="services-row">
                <Col className="services-col" xs={12} sm={12}  md={6} style={{height:"450px"}}>
                <span id="icon-title-left" style={{float: "right"}}>
                <h2 id="repair-h2"> Maintain & Repair</h2>
                <img 
                    alt="repair icon"
                    src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_48/v1598552288/elevator-repair-icon_uwx8p8.png">
                </img>
                    
                </span>
                    <p id="repair-p">
                        We design preventative maintenance programs
                        that extend equipment longevity, safety and 
                        reliability for every elevator model and budget.
                        Programs are complete with comprehensive 
                        inspection and testing services.
                    </p>
                </Col>
                <Col className="services-col" xs={12} sm={12} md={6}>
                    <div className="img-wrapper arrow-left">
                        <div className="img-wrapper arrow-left">
                            <img 
                                alt="elevator help button"
                                width="100%" height="auto"
                                src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_600/v1598208507/elevator-1207810_1920_o0b3rx.jpg">
                            </img>
                        </div>
                    </div>
                </Col>
                </Row>
                
                <Row noGutters={true} id="services-row">
                <Col className="services-col" xs={12} sm={12} md={6}>
                    <div className="img-wrapper arrow-right">
                        <div className="img-wrapper arrow-right">
                            <img 
                                className="modern-escalator"
                                alt="horizontal escalator"
                                width="100%" height="auto"
                                src="https://res.cloudinary.com/sabago/image/upload/v1598219898/escalator-mordern_eubgo4.jpg">
                            </img>
                        </div>
                    </div>
                </Col>
                <Col className="services-col" xs={12} sm={12} md={6}>
                    <span className="icon-title">
                        <img 
                            alt="up down icon"
                            src= "https://res.cloudinary.com/sabago/image/upload/c_scale,w_48/v1598551841/elevator-xxl_jpdk6j.png">                            
                        </img>
                        <h2> Mordenize & Customize</h2>
                    </span> 
                    <p style={{paddingTop:"13px", paddingBottom:"13px"}}>
                        Our dedicated team of expert engineers and
                        technicians can give your elevator a facelift
                        with the latest technology. We can increase your 
                        elevator's efficiency and performance, while 
                        upgrading the apppearance.
                    </p>
                </Col>
                </Row>
        </Container>
        <p className="services-home" style={{color:"white"}}>  
        Currently the following are also within the scope of our works:
    </p>
    <p className="services-home" style={{color: "white"}}>                 
        • Distribution and control systems.
        • Fire detection, alarm and fire extinguishing systems.
        • Public address systems.
        • Heating, ventilation, refrigeration and air conditioning.
        • Server and computer systems repair and programming.
    </p>
    </>
        );
    }
}