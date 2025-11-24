import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import { decrement, increment } from '../redux/counterSlice'

const Formik = () => {
    let count = useSelector((state) => state.counterReducer.counter)
    let dispatch = useDispatch();

    let formik = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
            onSubmit: (values) => {
                console.log(values)
            }, validationSchema: yup.object({
                firstName: yup.string('Input your first name').required('first name can not be empty'),
                lastName: yup.string('Input your last name').required('last name can not be empty'),
                email: yup.string('Fix in your address').required('Email is necessary').email('Email must be valid!'),
                password: yup.string('Put your password').required('Password field is required')
            })
        })

    return (
    <>
    <div>
        <p>{count}</p>
        <button onClick={()=> dispatch(increment())}>Increase</button>
        <button onClick={()=> dispatch(decrement())}>Decrease</button>


        <h4>Create your Account</h4>
        <input type="text" name="firstName" id="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.firstName && formik.errors.firstName ? <small className='text-danger'>{formik.errors.firstName}</small> : ''}

        <input type="text" name="lastName" id="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.lastName && formik.errors.lastName ? <small className='text-danger'>{formik.errors.lastName}</small> : ''}

        <input type="email" name="email" id="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email ? <small className='text-danger'>{formik.errors.email}</small> : ''}

        <input type="password" name="password" id="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password ? <small className='text-danger'>{formik.errors.password}</small> : ''}

        <button type='button' onClick={formik.handleSubmit}>Submit</button>
    </div>
    </>
    )
}

export default Formik