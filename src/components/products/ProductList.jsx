import React from 'react';
import './ProductList.css'; // Import your CSS file

function ProductList({ products,addProduct }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id} className='productList'>
            <p>ID: {product.id}</p>
            <p>Name: {product.nom}</p>
            <p>Price: ${product.prix}</p>
            <p>Purchase Price: ${product.prixAchat}</p>
            <button onClick={()=>{addProduct(product.id)}}>add to favourite</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
