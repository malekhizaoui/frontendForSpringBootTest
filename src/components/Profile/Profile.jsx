import React, { useEffect, useState } from 'react';
import UserProfile from './UserProfile'; // Update the path accordingly
import axios from 'axios';

function Profile() {
  const [user,setUser]=useState([])
  const getUser = JSON.parse(localStorage.getItem('user'));
  console.log("getUser.id",getUser.id);

  const getFromDB=()=>{
    axios.get(`http://localhost:8080/api/users/user/${getUser.id}`).then((res)=>{
      console.log("lsjhdgsjhdshdv");
      setUser(res.data)
    })
  }
  console.log('user',user);
  useEffect(()=>{
    getFromDB()
  },[])
  return (
    <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center"}}>
      <UserProfile user={user} />
      
    </div>
  );
}

export default Profile;
