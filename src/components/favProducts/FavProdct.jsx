import axios from 'axios';
import './fav.css'
import React, { useEffect, useState } from 'react'

function FavProdct() {
    const getUser = JSON.parse(localStorage.getItem('user'));
    const [user,setUser]=useState(getUser)
    const getFromDB=()=>{
      axios.get(`http://localhost:8080/api/users/user/${getUser.id}`).then((res)=>{
        setUser(res.data)
        console.log('ressss',res);

      })
    }
    console.log('user',user);
    console.log('user.favoriteProducts.length',user.favoriteProducts.length);
    useEffect(()=>{
      getFromDB()
    },[])    
  return (
    <div className="user-profile">

         <div className="favorite-products">
        <h3>Favorite Products</h3>
        <ul>
          {user.favoriteProducts.length!==0 ?user.favoriteProducts.map(product => (
            <li key={product.id}>
              <p>ID: {product.id}</p>
              <p>Name: {product.nom}</p>
              <p>Price: {product.prix}</p>
              <p>Purchase Price: {product.prixAchat}</p>
            </li>
          )):
          
          <li>
            no favorite product to show
          </li>}
        </ul>
    </div>
    </div>
  )
}

export default FavProdct