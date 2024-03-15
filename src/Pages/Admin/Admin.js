import React from 'react'
import { Formik, Field, Form } from 'formik'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Admin = () => {
    let history = useHistory();
    return (
        <>
            <div className="Admin">
                <div className="Adminlogin bg-black text-white">
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={async (values) => {
                            axios.post('http://localhost:3000/admin/login', values)
                                .then((res) => {
                                    console.log(res.data);
                                    localStorage.setItem('token', res.data.token)
                                    history.push('/Teams')
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
                                    <h1>Welcome</h1>
                                    <h1>To</h1>
                                    <h1>Admin Login</h1>
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
            </div>
        </>
    )
}

export default Admin