import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LOGO from '../Photos/logo.jpg'
const Headers = () => {
    return (
        <>
            <div className="Headers bg-black text-white border-bottom">
                <Container>
                    <Row className='p-3'>
                        <Col className='text-start'><a href="/Home"><img src={LOGO} alt="" /></a></Col>
                        <Col xs={6} className='links'>
                            <a className='pe-5 ' href="/Home">Home</a>
                            <a className='pe-5 ps-3' href="/Games">Games</a>
                            <a className='pe-5 ps-3' href="/Teams">Teams</a>
                            <a className='pe-5 ps-3' href="/Tournaments">Tournaments</a>
                            <a className='pe-1 ps-2' href="/Contact">Contact</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Headers