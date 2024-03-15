import React from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Formik, Field, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

    let history = useHistory();

    return (
        <>
            <div className="signup bg-black text-white">
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        username: '',
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(values);
                        axios.post('http://localhost:3000/user/signup', values)
                            .then((res) => {
                                console.log(res);
                                history.push('/login')
                            })
                            .catch((error) => {
                                console.log(error);
                                toast.error('Plase Enter Valid Inputs')
                            })
                    }}
                >
                    <div class="container-1">
                        <div class="card-1">
                            <div class="card_title-1">
                                <h3>Create a new account</h3>
                                <h1 className='p-4'>Welcome TO E-Sports Arena</h1>
                                <span>Already have an account? <a href="/login">Login</a></span>
                            </div>
                            <Form>
                                <label htmlFor="firstname"></label>
                                <Field id="firstname" name="firstname" placeholder="First Name" />

                                <label htmlFor="lastname"></label>
                                <Field id="lastname" name="lastname" placeholder="Last Name" />

                                <label htmlFor="username"></label>
                                <Field id="username" name="username" placeholder="User Name" />

                                <label htmlFor="email"></label>
                                <Field id="email" name="email" placeholder="Email" />

                                <label htmlFor="password"></label>
                                <Field type='password' id="password" name="password" placeholder="Password" />

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
            </div>
        </>
    )
}

export default Signup