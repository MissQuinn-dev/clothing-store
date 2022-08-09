import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useGlobalContext } from '../context';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
const validate = (values) => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Password Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  if (!values.email) {
    errors.email = 'E-mail Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,120}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Login = () => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  const request = useApi();
  const { setUserInfo } = useGlobalContext();
  const navigate = useNavigate();
  const loginUser = async (values) => {
    try {
      const response = await request.post('users/login', {
        ...values,
      });
      if (response.data) {
        console.log('loged in successfully!');
        setUserInfo({ ...response.data });
        navigate('/');
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      loginUser(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h3" gutterBottom component="div">
        Log in
      </Typography>
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
