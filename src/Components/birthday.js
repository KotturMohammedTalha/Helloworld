import { Button, Grid, Paper, Stack } from "@mui/material";
import React, { useState } from "react";

function Birthday() {
    const [ageJane, setAgeJane] = useState(45);
    const [ageJohn, setAgeJohn] = useState(88);
    return (
      <div>
        <h1>Birthday App</h1>
         <Stack
        direction="row"
        spacing={3}
        style={{ paddingBottom: "10px", paddingTop: "10px" }}
      >
        
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
              backgroundColor:'rgba(221, 209, 209, 0.87)'
            }}
          >
          <h1>Doe, Jane</h1>
          <h3>Age : {ageJane}</h3>
          <h3>Hair Color : Black </h3>
          <Button variant="contained" onClick={() => setAgeJane(ageJane + 1)}>
            Birthday Button for Jane Doe
          </Button>
          </Paper>
          </Grid>
          
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
              backgroundColor:'rgba(221, 209, 209, 0.87)'
            }}
          >
          <h1>Smith, John</h1>
          <h3>Age : {ageJohn}</h3>
          <h3>Hair Color : Brown </h3>
          <Button variant="contained" onClick={() => setAgeJohn(ageJohn + 1)}>
            Birthday Button for John Smith
          </Button>
          </Paper>
          </Grid>
        </Stack>
      </div>
    );
}

export default Birthday
