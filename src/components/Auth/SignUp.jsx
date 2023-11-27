import React, { useState } from "react";
import "./file.css";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [passwords, setpasswords] = useState("");
  const api = "http://localhost:8080/api/users/login";

  const createAccount = () => {
    console.log("sss");
    axios
      .post("http://localhost:8080/api/users/register", {
        firstName,
        lastName,
        email,
        passwords,
      })
      .then((res) => {
        console.log("res", res);
        navigate("/SignIn");
      });
  };
  return (
    <div
    // className="container-auth"
      
    >
      <form class="login" />
      <input
        type="text"
        placeholder="firstName"
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="lastName"
        onChange={(event) => {
          setlastName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(event) => {
          setemail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(event) => {
          setpasswords(event.target.value);
        }}
      />
      <button onClick={createAccount}>create account</button>
      <form />

      <a onClick={()=>{navigate('/SignIn')}}target="_blank">check my other pens</a>
    </div>
  );
}

export default SignUp;
