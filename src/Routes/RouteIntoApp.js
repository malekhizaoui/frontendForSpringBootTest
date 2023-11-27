import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from '../components/Profile/Profile';
import Accueil from '../components/accueil/Accueil';
import FavProdct from '../components/favProducts/FavProdct';
import Product from '../components/products/Product';
import Transcription from '../components/transcription/Transcription';
function RouteIntoApp() {
  return (
    <Routes>
    <Route path="/" exact element={<Transcription />} />
    <Route path="/Profile"  element={<Profile/>} />
    <Route path="/FavProdct"  element={<FavProdct/>} />
    <Route path="/Product"  element={<Product/>} />
  </Routes>
  )
}

export default RouteIntoApp