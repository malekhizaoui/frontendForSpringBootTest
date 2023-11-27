import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";
function RouteConected({setloggedIn}) {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/SignIn" exact element={<SignIn setloggedIn={setloggedIn}/>} />
    </Routes>
  );
}

export default RouteConected;
