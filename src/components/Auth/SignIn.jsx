import React, { useState } from 'react'
import "./file.css";
import axios from 'axios';
function SignIn({setloggedIn}) {

    const [email,setemail]=useState("")
    const [passwords,setpasswords]=useState("")

    const login=()=>{
        axios.post('http://localhost:8080/api/users/login',{email,passwords}).then((res)=>{
            setloggedIn(true)
            localStorage.setItem("user",JSON.stringify(res.data))
    })
    }
  return (
    <div>
      <form class="login"
          className="container-auth"
          />
      <input type="text" placeholder="email" onChange={(event)=>{setemail(event.target.value)}}/>
      <input type="password" placeholder="Password" onChange={(event)=>{setpasswords(event.target.value)}}/>
      <button onClick={login}>Login</button>
      <form />

      <a href="/" target="_blank">
        i have already account
      </a>
    </div>
  );
}

export default SignIn;
