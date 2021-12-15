import { Tabs, Box, Tab, Typography, Paper } from "@mui/material";
import React,{useState} from 'react'
import Login from './login'
import SignUp from './Signup'

const LinkCom = () => {
  const [value,setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const boxStyle={width:340,margin:'20px auto'}

  const TabPanel=(props)=> {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <div>
      <Paper elevation={20} sx={boxStyle}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="primary tabs example"
        >
          <Tab label="Sign in" />
          <Tab label="Sign up" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login handleChange={handleChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SignUp handleChange={handleChange} />
        </TabPanel>
      </Paper>
    </div>
  );
};

export default LinkCom
