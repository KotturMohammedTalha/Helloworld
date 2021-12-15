import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material/";
import LoginIcon from "@mui/icons-material/Login";
import {ErrorMessage, Field, Form, Formik} from 'formik'
import * as Yup from 'yup'

const Login = ({ handleChange }) => {
  //   const [state, setstate] = useState(true);
  const paperStyle = { padding: "40px 30px", width: 280, margin: "0 auto" };
  const avatarStyle = { backgroundColor: "rgb(116, 68, 174)" };
  const marginStyle = { margin: "8px 0" };
  const initialValues={
    username:'',
    password:'',
  }
  const onSubmit=(values,props)=>{
    console.log(values)
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Please Enter valid Email")
      .required("Required"),
    password: Yup.string()
      .required("Required")
      // .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LoginIcon />
            </Avatar>
            <h2 style={{ margin: 2 }}>Sign in</h2>
          </Grid>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  label="UserName"
                  variant="outlined"
                  name="username"
                  placeholder="Enter UserName"
                  helperText={<ErrorMessage name="username" />}
                  fullWidth
                  style={marginStyle}
                />
                <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  name="password"
                  variant="outlined"
                  placeholder="Enter Password"
                  helperText={<ErrorMessage name="password" />}
                  fullWidth
                  style={marginStyle}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={marginStyle}
                >
                  Sign in
                </Button>
              </Form>
            )}
          </Formik>
          <Typography style={marginStyle}>
            <Link href="#" underline="none">
              Forgot Password ?
            </Link>
          </Typography>
          <Typography style={marginStyle}>
            New User ?
            <Link
              sx={{ cursor: "pointer" }}
              underline="none"
              onClick={() => handleChange("event", 1)}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login
