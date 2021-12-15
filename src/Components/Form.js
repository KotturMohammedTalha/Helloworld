import React, { useState } from "react";

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
      <div>
        <div style={{fontSize:'18px',fontWeight:600}}>
          <label>First Name</label>{" "}
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
          <br />
          <label>Last Name</label>{" "}
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
          <br />
          <label>Email</label>{" "}
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label>Password</label>{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <label>Confirm Password</label>{" "}
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <h1>Your Form Data</h1>
          <h3>First Name : {firstName}</h3>
          <h3>Last Name : {lastName}</h3>
          <h3>Email : {email}</h3>
          <h3>Password : {password}</h3>
          <h3>Confirm Password : {confirmPassword}</h3>
        </div>
      </div>
    );
}

export default Form
