import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './styles/index.css';

export class Clients extends React.Component {
    render() {
        return (
            <>
            <h1> Our Satisfied Clients</h1>
                        <Container fluid className="clients-container">
                            <Row noGutters={true} className="clients-row">
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <img
                                        alt="eureka hotel" 
                                        src="https://res.cloudinary.com/sabago/image/upload/v1599745490/eureka_fa5qnh.png">
                                    </img>
                                </Col>
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <div className="text-top">
                                        <h4 className="nssf-text">NSSF Building</h4>
                                        <img 
                                            alt="NSSF Building Mbarara"
                                            src="https://res.cloudinary.com/sabago/image/upload/v1599749310/nssf-mbarara_mi2mcv.jpg">
                                        </img>
                                        <h4 className="lasvegas-text" style={{color: "#ffffff"}}>Mbarara</h4>
                                    </div>
                                </Col>
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <div className="text-top">
                                        <img 
                                            alt="Las Vegas garden hotel, Bunga"
                                            src="https://res.cloudinary.com/sabago/image/upload/v1599745568/las_vegas_building_daaraz.png">
                                        </img>
                                        <h4 className="lasvegas-text"> Bunga</h4>
                                    </div>
                                </Col>
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <div className="text-top">
                                        <img 
                                            alt="Oval Plaza, Mbale"
                                            src="https://res.cloudinary.com/sabago/image/upload/v1599746111/oval_plaza_mbale_ebmj41.jpg">
                                        </img>
                                        <h4 className="oval-text">Oval Plaza, Mbale</h4>
                                    </div>
                                </Col>
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <h4>Soroti University</h4>
                                    <img 
                                        alt="Soroti University"
                                        src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_130/v1599745756/soroti_uni_gheetv.jpg">
                                    </img>
                                    <h4>Multipurpose Building</h4>
                                </Col>
                                <Col className="clients-col" xs={12} sm={4} md={4} lg={2}>
                                    <div>
                                    <h4 style={{marginTop:"35px"}}>Dr.Bashasha's residence</h4>
                                    {/* <img src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_130/v1599745756/soroti_uni_gheetv.jpg"></img> */}
                                    <h4 style={{marginTop:"10%", textAlign: "center"}}>Bunga</h4> 
                                    </div>
                                </Col>
                            </Row>
                        </Container>
            </>
        );
    }
}