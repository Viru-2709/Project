import React from 'react'
import Headers from '../Headers'
import Footer from '../Footer'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Contact = () => {

    // eslint-disable-next-line no-unused-vars
    const [data, setdata] = useState([])

    return (
        <>
            <Headers />
            <div className="Contact bg-black text-white">
                <div className="inquiry">
                    <h3 className='pt-5'>Drop Your inquiry</h3>
                    <h6 className='pt-5 m-0'>If you're looking to organize an esports tournament or Analyzing esports tournament
                        and want to solicit interest or gather information from potential , sponsors, or partners,
                        you can create an inquiry.
                    </h6>
                </div>
                <div className="from">
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            number: '',
                            subject: '',
                            message: '',
                        }}
                        enableReinitialize={true}
                        onSubmit={async (values, action) => {
                            axios.post('http://localhost:3000/inquiry/addinquiry', values)
                                .then((res) => {
                                    console.log(values);
                                    setdata(res.data)
                                })
                                .catch((error) => {
                                    console.log(error);
                                    toast.error('Please Enter Valid Inputs')
                                })
                            action.resetForm()
                        }
                        }
                    >
                        <div class="container-1">
                            <div class="card-1">
                                <div class="card_title-1">
                                    <h1>Create Your Inquiry</h1>
                                </div>
                                <Form>
                                    <label htmlFor="name"></label>
                                    <Field id="name" name="name" placeholder="Name" />

                                    <label htmlFor="email"></label>
                                    <Field id="email" name="email" placeholder="Email" />

                                    <label htmlFor="number"></label>
                                    <Field id="number" name="number" placeholder="Number" />

                                    <label htmlFor="subject"></label>
                                    <Field id="subject" name="subject" placeholder="Subject" />

                                    <label htmlFor="message"></label>
                                    <Field id="message" name="message" placeholder="Message" />

                                    <button type="submit" >Submit</button>
                                    <ToastContainer />
                                </Form>
                            </div>
                        </div>
                    </Formik>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact