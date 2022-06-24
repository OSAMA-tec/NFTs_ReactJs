import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "axios";
import "./login.css";
// import './Login';
function SignUp() {
  const [userFnamereg, setUserFnamereg] = useState("");
  const [userLnamereg, setUserLnamereg] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userpass, setUserpass] = useState("");
  const register = (e) => {
    e.preventDefault();
    console.log(userFnamereg);
    Axios.post("http://localhost:3001/register", {
      First_Name: userFnamereg,
      Second_Name: userLnamereg,
      Email: userEmail,
      password: userpass,
    }).then(({status, data}) => {
      console.log(status, data);
    });
  };
  return (
    <>
      <form className="form">
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => {
              setUserFnamereg(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input
            type="text"
             className="form-control"
            placeholder="Last name"
            onChange={(e) => {
              setUserLnamereg(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => {
              setUserpass(e.target.value);
            }}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={(e)=>{
            register(e);
          }}>
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/Login">sign in?</Link>
        </p>
      </form>
    </>
  );
}

export default SignUp;