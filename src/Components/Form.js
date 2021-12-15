import { Grid, Paper, TextField,Stack } from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <div>
      <Stack
        direction="row"
        spacing={3}
        style={{ paddingBottom: "10px", paddingTop: "10px" }}
      >
        {/* <Grid xs={12} md={12} > */}
        <Grid xs={6} md={6}>
          <Paper
            elevation={20}
            style={{
              margin: "20px auto",
              width: "300px",
              padding: "30px 20px",
              fontSize: "18px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            <h2>Form</h2>
            <Grid>
              <TextField
                label="First Name"
                variant="outlined"
                style={{ margin: "10px 0" }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <br />
              <TextField
                label="Last Name"
                variant="outlined"
                style={{ margin: "10px 0" }}
                onChange={(e) => setLastName(e.target.value)}
              />
              <br />
              <TextField
                label="Email"
                type="email"
                variant="outlined"
                style={{ margin: "10px 0" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                style={{ margin: "10px 0" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <TextField
                label="Confirm Password"
                variant="outlined"
                type="password"
                style={{ margin: "10px 0" }}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Paper>
        </Grid>
        <Grid xs={6} md={6}>
          <Paper
            elevation={20}
            style={{
              margin: "20px auto",
              width: "500px",
              padding: "30px 20px",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            <h2 style={{ textAlign: "center" }}>Your Form Data</h2>
            <h3>First Name : {firstName}</h3>
            <h3>Last Name : {lastName}</h3>
            <h3>Email : {email}</h3>
            <h3>Password : {password}</h3>
            <h3>Confirm Password : {confirmPassword}</h3>
          </Paper>
        </Grid>
        {/* </Grid> */}
      </Stack>
    </div>
  );
}

export default Form;
