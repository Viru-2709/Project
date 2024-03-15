import React from 'react'
import Headers from '../Headers'
import Footer from '../Footer'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Games = () => {
    return (
        <>
            <Headers />
            <div className="Games bg-black text-white">
                <h2 className='m-0 p-5'>Most Populer E-Sports Games In India</h2>
                <div className="cards">
                    <Container>
                        <Row className='p-5'>
                            <Col>
                                <Card>
                                    <a href="/bgmi">
                                        <Card.Img variant="top" src="https://i.pinimg.com/originals/59/0c/a7/590ca77b4d95284a9e16017234f683c5.jpg" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Battlegrounds Mobile India</Card.Title>
                                        <Card.Text className='pt-3'>
                                            Battlegrounds Mobile India is a version of PUBG Mobile,
                                            It is an online multiplayer battle royale game by Krafton.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/cod">
                                        <Card.Img variant="top" src="http://localhost:3001/static/media/cod.dcd98822810ef8760fc5.jpg" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Call Of Duty</Card.Title>
                                        <Card.Text className='pt-3'>
                                            Call of Duty is a video game series and media franchise
                                            developed by Infinity Ward & published by Activision
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/freefire">
                                        <Card.Img variant="top" src="http://localhost:3001/static/media/free.4e19876fd443f94d137f.jpg" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Free Fire</Card.Title>
                                        <Card.Text className='pt-3'>
                                            Free Fire is a free to play battle royale game developed and published by Garena for Android and iOS.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='p-5'>
                            <Col>
                                <Card>
                                    <a href="/velorant">
                                        <Card.Img variant="top" src="http://localhost:3001/static/media/velo.2838271b1f8dfd20fccf.jpg" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Valorant</Card.Title>
                                        <Card.Text className='pt-3'>
                                            Valorant is a free-to-play first-person tactical hero shooter developed and published by Riot Games
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/csgo">
                                        <Card.Img variant="top" src="https://ih1.redbubble.net/image.4107351806.2507/st,small,507x507-pad,600x600,f8f8f8.jpg" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Counter-Strike: Global Offensive</Card.Title>
                                        <Card.Text className='pt-3'>
                                            CS-GO is multiplayer first-person shooter developed by Valve and Hidden Path Entertainment.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/league_of_legends">
                                        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSRJLADAijG2jFRwmSgXpOF2rnoplTKW2zJw&usqp=CAU" />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>League of Legends</Card.Title>
                                        <Card.Text className='pt-3'>
                                            League of Legends a 2009 multiplayer online battle arena video game developed and published by Riot Games.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Games