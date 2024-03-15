import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Headers from '../Headers';
import Footer from '../Footer';
import SOUL from './Img/soul.jpg'
import TX from './Img/tx.jpg'
import GDR from './Img/gdr.jpg'
import BLIND from './Img/blind.jpg'
import GODS from './Img/gods.jpg'
import RNT from './Img/rnt.jpg'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
const Teams = () => {

    const [data, setdata] = useState([]);

    const [initialValues, setinitialValues] = useState({
        teamname: '',
        players: {
            player1: '',
            player2: '',
            player3: '',
            player4: '',
            player5: '',
        },
        organization: '',
        manager: '',
        gamename: '',
    })

    const alldata = (() => {
        axios.get('http://localhost:3000/team/allteam', {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res.data.data);
                setdata(res.data.data)
            })
            .catch((error) => {
                console.log(error);
            })
    })

    useEffect(() => {
        alldata()
    }, [])

    const deleteHandler = (id) => {
        console.log(id);
        axios.delete('http://localhost:3000/team/deleteteam/' + id, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
            .then((res) => {
                console.log(res)
                alldata()
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const LogoutHandler = () =>{
        localStorage.removeItem('token')
    }


    return (
        <>
            <Headers />
            <div className="Teams bg-black text-white pb-5">
                <h2 className='m-0 p-5'>Top Teams Of Indian E-Sports</h2>
                <div className="bt">
                    <a href="/AdminLogin">Login</a>
                    <a onClick={LogoutHandler} href="/Teams">Logout</a>
                </div>
                <div className="cards">
                    <Container>
                        <Row className='p-5'>
                            <Col>
                                <Card>
                                    <a href="/bgmi">
                                        <Card.Img variant="top" src={SOUL} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>IQOO SOUL</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/cod">
                                        <Card.Img variant="top" src={TX} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>TeamXspark</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/freefire">
                                        <Card.Img variant="top" src={GDR} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Gladitors</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row className='p-5'>
                            <Col>
                                <Card>
                                    <a href="/velorant">
                                        <Card.Img variant="top" src={BLIND} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Team Blind</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/csgo">
                                        <Card.Img variant="top" src={GODS} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>God Reign</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <a href="/league_of_legends">
                                        <Card.Img variant="top" src={RNT} />
                                    </a>
                                    <Card.Body className='bg-black text-white'>
                                        <Card.Title className='pt-2'>Revenant</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="from  bg-black text-white pt-5 pb-5">
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={async (values, action) => {
                        console.log(initialValues._id);
                        if (initialValues._id) {
                            axios.patch('http://localhost:3000/team/editteam/' + initialValues._id, values, {
                                headers: {
                                    token: localStorage.getItem('token')
                                }
                            })
                                .then((res) => {
                                    console.log(res.data.data);
                                    alldata()
                                })
                                .catch((error) => {
                                    console.log(error);
                                })
                        }
                        else {
                            console.log(values);
                            axios.post('http://localhost:3000/team/createteam', values, {
                                headers: {
                                    token: localStorage.getItem('token')
                                }
                            })
                                .then((res) => {
                                    console.log(res.data);
                                    alldata()
                                })
                                .catch((error) => {
                                    console.log(error);
                                    toast.error('Please Enter Valid Inputs')
                                })
                        }
                        action.resetForm();
                    }}
                >
                    <div class="container-1">
                        <div class="card-1">
                            <div class="card_title-1">
                                <h3>Create Your Team</h3>
                            </div>
                            <Form>
                                <label htmlFor="teamname"></label>
                                <Field id="teamname" name="teamname" placeholder="Team Name" />

                                <label htmlFor="players.player1"></label>
                                <Field id="players.player1" name="players.player1" placeholder="Player-1" />

                                <label htmlFor="players.player2"></label>
                                <Field id="players.player2" name="players.player2" placeholder="Player-2" />

                                <label htmlFor="players.player3"></label>
                                <Field id="players.player3" name="players.player3" placeholder="Player-3" />

                                <label htmlFor="players.player4"></label>
                                <Field id="players.player4" name="players.player4" placeholder="Player-4" />

                                <label htmlFor="players.player5"></label>
                                <Field id="players.player5" name="players.player5" placeholder="Player-5" />

                                <label htmlFor="organization"></label>
                                <Field id="organization" name="organization" placeholder="organization" />

                                <label htmlFor="manager"></label>
                                <Field type='manager' id="manager" name="manager" placeholder="Manager" />

                                <label htmlFor="gamename"></label>
                                <Field type='gamename' id="gamename" name="gamename" placeholder="Game" />

                                <button type="submit" >Submit</button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    theme="dark"
                                />
                            </Form>
                        </div>
                    </div>
                </Formik>
                <div className="table pt-5 pb-5">
                    <table border={2} align={'center'} className='mt-5 p-5'>
                        <tr>
                            <th>No</th>
                            <th>Team Name</th>
                            <th>Player-1</th>
                            <th>Player-2</th>
                            <th>Player-3</th>
                            <th>Player-4</th>
                            <th>Player-5</th>
                            <th>Organization</th>
                            <th>Manager</th>
                            <th>Game</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {
                            data.map((el, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{el.teamname}</td>
                                    <td>{el.players.player1}</td>
                                    <td>{el.players.player2}</td>
                                    <td>{el.players.player3}</td>
                                    <td>{el.players.player4}</td>
                                    <td>{el.players.player5}</td>
                                    <td>{el.organization}</td>
                                    <td>{el.manager}</td>
                                    <td>{el.gamename}</td>
                                    <td><button onClick={() => setinitialValues(el)} >Edit</button></td>
                                    <td><button onClick={() => deleteHandler(el._id)} >Delete</button></td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Teams