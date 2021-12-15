import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material/";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignUp = ({ handleChange }) => {
  // const [state1, setstate] = useState(false)
  const paperStyle = { padding: "40px 30px", width: 280, margin: "0 auto" };
  const avatarStyle = { backgroundColor: "rgb(116, 68, 174)" };
  const marginStyle = { margin: "2px 0" };
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    radiobuttons:""
  };
  const onSubmit = (values, props) => {
    console.log(values);
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, "Enter minimum 6 characters")
      .required("Required"),
    email: Yup.string().email("Please Enter valid Email").required("Required"),
    password: Yup.string()
      .required("Required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmpassword: Yup.string()
      .required("Required")
      .oneOf(
        [Yup.ref("password"), null],
        "Password and Confirm Password must match"
      ),
    radiobuttons: Yup.boolean()
      .required()
      .oneOf([0, 1], "Selecting the gender field is required"),
  });
  return (
    <div>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <PersonAddAltIcon />
            </Avatar>
            <h2 style={{ margin: 2 }}>Sign Up</h2>
            <Typography variant="caption">
              Please fill this form to create an account{" "}
            </Typography>
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
                  label="Name"
                  variant="standard"
                  placeholder="Enter Name"
                  name="name"
                  helperText={<ErrorMessage name="name" />}
                  fullWidth
                  style={marginStyle}
                />
                <Field
                  as={TextField}
                  label="Email Address"
                  type="email"
                  variant="standard"
                  name="email"
                  placeholder="Enter Email Address"
                  helperText={<ErrorMessage name="email" />}
                  fullWidth
                  style={marginStyle}
                />
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender">
                    <Field
                      as={FormControlLabel}
                      value="female"
                      control={<Radio />}
                      name="radiobuttons"
                      label="Female"
                    />
                    <Field
                      as={FormControlLabel}
                      value="male"
                      control={<Radio />}
                      label="Male"
                      name="radiobuttons"
                      helperText={<ErrorMessage name="radiobuttons" />}
                    />
                  </RadioGroup>
                </FormControl>
                <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  variant="standard"
                  placeholder="Enter Password"
                  name="password"
                  helperText={<ErrorMessage name="password" />}
                  fullWidth
                  style={marginStyle}
                />
                <Field
                  as={TextField}
                  label="Confirm Password"
                  type="password"
                  variant="standard"
                  placeholder="Re-Enter Password"
                  name="confirmpassword"
                  helperText={<ErrorMessage name="confirmpassword" />}
                  fullWidth
                  style={marginStyle}
                />
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  fullWidth
                  style={{ margin: "8px 0" }}
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
          <Typography style={marginStyle}>
            Already have an account ?
            <Link
              sx={{ cursor: "pointer" }}
              underline="none"
              onClick={() => handleChange("event", 0)}
            >
              Sign in
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
};

export default SignUp;
