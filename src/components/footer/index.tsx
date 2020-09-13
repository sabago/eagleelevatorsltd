import * as React from 'react';


import './styles/index.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Services } from '../services/index';

export class Footer extends React.Component {
    render() {
        return (
            <footer style={{backgroundColor:" #161831"}} className="footer mt-auto py-3">
                <Container fluid style={{maxWidth: "100%"}}>
                    <span className="text-muted"><h2 style={{color:"white", fontWeight:800}} >
                        So how can we elevate you?
                    </h2></span>
                    <Row >
                        <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{paddingRight:0, paddingLeft:0}}>
                            <p style={{ color: "white", writingMode: "vertical-rl", textOrientation: "mixed"}}><a href="http://localhost:3000/#container-wrap">
                                Services
                            </a></p>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{paddingRight:0, paddingLeft:0}}>
                            <p style={{color:"white", textAlign:"left"}}>
                                Contact<br/>
                                +256(414)662804 <br/>
                                email@eagleelevators.com
                            </p>
                        </Col>
                        <Col xs={5} sm={5} md={5} lg={5} xl={5} style={{paddingRight:0, paddingLeft:0}}>
                            <p style={{color:"white", textAlign:"right"}}>
                                Plot 28/30 Bombo Rd<br/>
                                1st Flr, Suite 103<br/>
                                Kampala
                            </p>
                        </Col>
                    </Row>
                    <small style={{color:"white"}}>&copy; Copyright 2017-2020, Eagle Elevators Ltd</small>
                </Container>
          </footer>
        )
    }
}

