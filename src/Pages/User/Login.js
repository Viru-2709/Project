import React from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let history = useHistory();
    return (
        <>
            <div className="Userlogin bg-black text-white">
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        axios.post('http://localhost:3000/user/login', values)
                            .then((res) => {
                                console.log(res.data);
                                history.push('/Home')
                            })
                            .catch((error) => {
                                console.log(error);
                                toast.error("Invalid Email or Password")
                            })
                    }}
                >
                    <div class="container-1">
                        <div class="card-1">
                            <div class="card_title-1">
                                <h1>Login to your Account</h1>
                                <span>You Don't have an account? <a href="/">Signup</a></span>
                            </div>
                            <Form>
                                <label htmlFor="email"></label>
                                <Field id="email" name="email" placeholder="Email" />

                                <label htmlFor="password"></label>
                                <Field type='password' id="password" name="password" placeholder="Password" />

                                <button type="submit">Submit</button>
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
            </div>
        </>
    )
}

export default Login