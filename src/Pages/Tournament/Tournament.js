import React from 'react'
import Headers from '../Headers'
import Footer from '../Footer'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
const Tournament = () => {
    const [data, setdata] = useState([]);

    const [initialValues, setinitialValues] = useState({
        name: '',
        orgainizer: '',
        game: {
            name:'',
        },
        pricepoll: ''
    })

    const alldata = (() => {
        axios.get('http://localhost:3000/tournament/alltournament', {
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
        axios.delete('http://localhost:3000/tournament/deletetournament/' + id, {
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

    const LogoutHandler = () => {
        localStorage.removeItem('token')
    }

    return (
        <>
            <Headers />
            <div className="Tournament bg-black text-white p-5">
                <h2>WelCome To E-Sports Arena</h2>
                <p className='info-2 p-5'>Prepare yourself for the ultimate clash of digital titans as the E-SpOrts Showdown takes
                    center stage, bringing together elite esports teams from across the india. This interstellar
                    tournament transcends boundaries, uniting the best players in an electrifying spectacle of skill,
                    strategy, and pure gaming prowess
                </p>
                <h4>Register Your Tournament Here</h4>
                <div className="bt-1">
                    <a href="/AdminLogin">Login</a>
                    <a onClick={LogoutHandler} href="/Tournaments">Logout</a>
                </div>
            </div>
            <div className="from pb-5 bg-black text-white">
                <Formik
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={async (values, action) => {
                        console.log(initialValues._id);

                        if (initialValues._id) {
                            axios.patch('http://localhost:3000/tournament/edittournament/' + initialValues._id, values, {
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
                            axios.post('http://localhost:3000/tournament/createtournament', values, {
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
                        action.resetForm()
                    }}
                >
                    <div class="container-1">
                        <div class="card-1">
                            <div class="card_title-1">
                                <h1>Enter Team Details</h1>
                            </div>
                            <Form>
                                <label htmlFor="name"></label>
                                <Field id="name" name="name" placeholder="Tournament Name" />

                                <label htmlFor="orgainizer"></label>
                                <Field id="orgainizer" name="orgainizer" placeholder="Orgainizer" />

                                <label htmlFor="game.name"></label>
                                <Field id="game.name" name="game.name" placeholder="Games" />


                                <label htmlFor="pricepoll"></label>
                                <Field id="pricepoll" name="pricepoll" placeholder="Pricepoll" />

                                <button type="submit" >Submit</button>
                            </Form>
                        </div>
                    </div>
                </Formik>
                <div className="table pb-5">
                    <table border={2} align={'center'} className='mt-5 p-5'>
                        <tr>
                            <th>No</th>
                            <th>Tournament Name</th>
                            <th>Orgainizer</th>
                            <th>Game</th>
                            <th>Pricepoll</th>
                            <th>Edit Team</th>
                            <th>Delete Team</th>
                        </tr>
                        {
                            data.map((el, i) => {
                                return <tr>
                                    <td>{i + 1}</td>
                                    <td>{el.name}</td>
                                    <td>{el.orgainizer}</td>
                                    <td>{el.game.name}</td>
                                    <td>{el.pricepoll}</td>
                                    <td><button onClick={() => setinitialValues(el)}>Edit</button></td>
                                    <td><button onClick={() => deleteHandler(el._id)}>Delete</button></td>
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

export default Tournament