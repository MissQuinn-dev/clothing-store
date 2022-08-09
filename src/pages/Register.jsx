import React from 'react';
import { useFormik } from 'formik';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { useApi } from '../hooks/useApi';
import { useNavigate } from 'react-router-dom';

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

  if (values.password !== values.password2) {
    errors.password2 = 'Passwords must match';
  }

  return errors;
};

const Register = () => {
  const navigate = useNavigate();
  const request = useApi();
  const registerUser = async (values) => {
    try {
      const response = await request.post('users/register', {
        ...values,
      });
      if (response.data) {
        return navigate('/login');
      }

      return;
    } catch (error) {
      console.log(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      password2: '',
    },
    validate,
    onSubmit: (values) => {
      registerUser(values);
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography variant="h3" gutterBottom component="div">
        Register
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
      <Box autoComplete="off">
        <TextField
          id="outlined-password-input2"
          name="password2"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password2}
        />
        {formik.errors.password2 ? <div>{formik.errors.password2}</div> : null}
      </Box>
      <Button variant="contained" type="submit" endIcon={<ChevronRightOutlinedIcon />}>
        Submit
      </Button>
    </form>
  );
};
export default Register;
