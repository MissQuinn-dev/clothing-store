import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password Required';
  } else if (values.password.length > 25) {
    errors.password = 'Must be 25 characters or less';
  }

  if (!values.email) {
    errors.email = 'E-mail Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Login = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h6" gutterBottom component="div">
        E-mail
      </Typography>
      <Box autoComplete="off">
        <TextField
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </Box>
      <Typography variant="h6" gutterBottom component="div">
        Password
      </Typography>
      <Box autoComplete="off">
        <TextField
          id="outlined-password-input"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
      </Box>
      <Button variant="contained" type="submit" endIcon={<ChevronRightOutlinedIcon />}>
        Submit
      </Button>
    </form>
  );
};
export default Login;
