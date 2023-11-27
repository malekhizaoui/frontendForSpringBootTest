import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import { useNavigate } from 'react-router-dom'
function Product() {
  const navigate=useNavigate()
    const [products,setProducts]=useState([])
    const getProducts=()=>{
        axios.get('http://localhost:8080/produits').then((res)=>{
        console.log('res',res.data);
        setProducts(res.data)
        })
    }

    const addProduct=(product)=>{
        const userId=JSON.parse(localStorage.getItem('user')).id
        console.log("userId",userId);
        console.log("product",product);

        axios.post(`http://localhost:8080/api/favouriteProduct/addFavoriteProduct/${userId}/${product}`).then(()=>{
          navigate('/FavProdct')
        }).catch(()=>{
          console.log("zldkhgj");
        })
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (
    <div>
    <h1>Welcome to My App</h1>
    <ProductList products={products} addProduct={addProduct} />
  </div>
  )
}

export default Product