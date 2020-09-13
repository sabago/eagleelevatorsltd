import * as React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import './styles/index.css';
import { Footer } from '../footer';

export class About extends React.Component {
    render() {
        return (
            <>
            <div id="about-container">
                <video autoPlay={true} loop={true} muted className="video" >
                    <source src="https://res.cloudinary.com/sabago/video/upload/v1599934023/escaalor-mov-edit_sbgo0u.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="mission">
                    <div className="mission-content">
                        <h6>OUR MISSION</h6>
                        <h1>
                        Strive to bring unique perspective <br/>
                        and understanding to the issues faced <br/>
                        by the LIFTS & ESCALATOR <br />
                        Engineering profession.
                        </h1>
                    </div>
                </div>
            </div>
            <div id="objective">
                <h3>Objectives:</h3>
                <p>
                • Formulate and implement Vertical, Inclined, Horizontal and Transportation projects to serve human needs and aspirations with designs in the most practical manner possible. <br />
                • To meet the needs of the intended beneficiaries without foregoing technical quality and within affordable budget
                </p>
            </div>
            <div id="team">
                <span><h2 style={{ fontWeight:800}} > Organization </h2> </span>
                <p>
                    Eagle Elevators Ltd was incorporated in Uganda on the 6th of November in 2017:
                    particularly to give specialized and detailed reliable services in Vertical, 
                    Inclined and Horizontal transport systems in Buildings as their core business.
                    <br/><hr />
                    We are now authorized by Fuji Lifts Co., Ltd. to manufacture, supply, install and commission FUJI Lifts. 
                    We are Fuji Lifts, leading representatives in East Africa. 
                    <br />
                    The Firm is based in Kampala at Plot 28/30 Bombo Road, First Floor, Suite 103.
                    <hr style={{width:"50%", height:"2px"}}/>
                </p>
                <Container fluid style={{maxWidth: "100%"}}>
                    <span className="text-muted"><h2 style={{color:"white", fontWeight:800}} >
                        Meet the team!
                    </h2></span>
                    <Row >
                        <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{paddingRight:0, paddingLeft:0, display:"flex", flexDirection: "column", justifyContent: "center"}}>
                            <h4 style={{ color: "white", writingMode: "vertical-rl", textOrientation: "mixed"}}>
                                Executive
                            </h4>
                        </Col>
                         {/* <img style={{backgroundColor:"#1d3750", filter: "opacity(0.5) drop-shadow(0 0 0 blue)"}} */}
                        <Col xs={11} sm={11} md={5} lg={5} xl={5}>
                            <span >
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png">
                                 </img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>ADMIN/FINANCE DIRECTOR</h4>
                                 <p>Mr.Ssekiwala John Stephen<br/>
                                  Bachelors in Business Administration<br/>
                                  Years of experience.
                                  </p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={6} lg={6} xl={6}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>TECH/ENGINEERING DIRECTOR</h4>
                                 <p>Eng. Opalet Michael<br/>
                                 Self-taught engineer with<br/>
                                 decades of experience.
                                 </p>
                            </span>
                        </Col>
                    </Row>
                    <Row >
                        <Col xs={1} sm={1} md={1} lg={1} xl={1} style={{paddingRight:0, paddingLeft:0, display:"flex", flexDirection: "column", justifyContent: "center"}}>
                            <h4 style={{ color: "white", writingMode: "vertical-rl", textOrientation: "mixed"}}>
                                Management
                            </h4>
                        </Col>
                         {/* <img style={{backgroundColor:"#1d3750", filter: "opacity(0.5) drop-shadow(0 0 0 blue)"}} */}
                        <Col xs={11} sm={11} md={4} lg={4} xl={4}>
                            <span >
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>EXTERNAL ACCOUNTANT</h4>
                                 <p>Mr.Ddamulira Andrew</p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={4} lg={4} xl={4}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>MECHANICAL FOREMAN</h4>
                                 <p>Mr.Apangu Vincent</p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={3} lg={3} xl={3}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>ELECTRICAL FOREMAN</h4>
                                 <p>Mr.Malira Davis</p>
                            </span>
                        </Col>
                    </Row>

                    <Row >
                         {/* <img style={{backgroundColor:"#1d3750", filter: "opacity(0.5) drop-shadow(0 0 0 blue)"}} */}
                        <Col xs={11} sm={11} md={3} lg={3} xl={3}>
                            <span >
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>TECHNICIAN</h4>
                                 <p>Mr.Echonyu Victor</p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={3} lg={3} xl={3}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>TECHNICIAN</h4>
                                 <p>Mr.Emeru Anthony</p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={3} lg={3} xl={3}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>TECHNICIAN</h4>
                                 <p>Mr.Kayerere Lawrence</p>
                            </span>
                        </Col>
                        <Col xs={11} sm={11} md={3} lg={3} xl={3}>
                            <span style={{backgroundColor:"white"}}>
                                <img
                                className="team-img"
                                 src="https://res.cloudinary.com/sabago/image/upload/c_scale,w_250/v1599939844/profile_final_r4fbv5.png"></img>
                                 <h4 style={{fontWeight:600, paddingTop:"1rem"}}>TECHNICIAN</h4>
                                 <p>Mr.Ola Banabas</p>
                            </span>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
            </>
        );
    }
}