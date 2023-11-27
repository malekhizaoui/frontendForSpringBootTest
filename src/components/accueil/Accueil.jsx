import React, { useState } from "react";
import "./file.css"
import { useNavigate, useLocation } from "react-router-dom";
function Accueil() {
    const navigate = useNavigate();
  
  return (
    <div style={{width:"100%"}}>
         <nav class="navbar">
    <ul>
      <li><a onClick={()=>{navigate('/')}}>Accueil</a></li>
      <li><a href="#" onClick={()=>{navigate('/Product')}}>Produit</a></li>
      <li><a href="#" onClick={()=>{navigate('/FavProdct')}}>Produits Favoris</a></li>
      <li><a href="#" onClick={()=>{navigate('/Profile')}}>Profil</a></li>
    </ul>
  </nav>
 
    </div>
  )
}

export default Accueil