import React from 'react'   
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaYoutube, FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer bg-black text-white border-top'>
            <container-fluid>
                <Container>
                    <Row className='p-5'>
                        <Col>
                            <Card className="text bg-black text-white" >
                                <h2 className='pt-3 pb-3 border-bottom text-start'>E-Sports Arena</h2>
                                <p className='pt-3'>E-Sports Arena is your go-to destination for quality esports content.
                                    Our Team strive to provide accurate, trustworthy and timely esports news,
                                    gaming content, player statistics, tournament coverage and original stories from around the India.
                                </p>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="text-1 bg-black text-white">
                                <h5 className='pt-3 pb-3 text-end'>Our company</h5>
                                <ul className='text-start-2'> 
                                    <li className='pt-3'><a href="/aboutus">About</a></li>
                                    <li className='pt-3'><a href="/contact">Contact us</a></li>
                                    <li className='pt-3'><a href="3">Terms of Use</a></li>
                                    <li className='pt-3'><a href="4">Privacy Policy</a></li>
                                </ul>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="text-2 bg-black text-white">
                                <h5 className='pt-3 pb-3 text-end'>Connect With Us</h5>
                                <ul className='text-1-start'>
                                    <li className='pt-3'><a href="1"><FaYoutube /> Youtube</a></li>
                                    <li className='pt-3'><a href="2"><FaFacebookSquare /> Facebook</a></li>
                                    <li className='pt-3'><a href="3"><FaTwitter /> Twitter</a></li>
                                    <li className='pt-3'><a href="4"><FaInstagram /> Instagram</a></li>
                                </ul>
                            </Card>
                        </Col>
                    </Row>
                    <Card.Footer className="last border-top pt-4">
                        <Row className='p-3'>
                            <Col><h5>E-Sports Arena</h5></Col>
                            <Col className=''><p>| © esportsarena, LLC</p></Col>
                            <Col></Col>
                            <Col><h6>ENGLISH(INDIA)</h6></Col>
                        </Row>
                    </Card.Footer>
                </Container>
            </container-fluid>
        </div>
    )
}

export default Footer