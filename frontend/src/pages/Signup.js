import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(20).max(60).required(),
      email: Yup.string().email().required(),
      address: Yup.string().max(400).required(),
      password: Yup.string()
        .min(8)
        .max(16)
        .matches(/[A-Z]/, 'One uppercase required')
        .matches(/[@$!%*?&#]/, 'One special character required')
        .required()
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('http://localhost:5000/api/auth/signup', values);
        alert('Signup successful!');
      } catch (error) {
        alert('Signup failed');
        console.error(error.response?.data);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input name="name" onChange={formik.handleChange} placeholder="Name" />
      <input name="email" onChange={formik.handleChange} placeholder="Email" />
      <input name="address" onChange={formik.handleChange} placeholder="Address" />
      <input name="password" type="password" onChange={formik.handleChange} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
