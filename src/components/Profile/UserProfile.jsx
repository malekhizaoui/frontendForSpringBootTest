import React from 'react';
import './UserProfile.css'; // Import your CSS file

function UserProfile({ user }) {
    console.log("user",user);
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p>ID: {user.id}</p>
        <p>Name: {user.firstName} {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Password:******</p>
      </div>

      {/* <div className="favorite-products">
        <h3>Favorite Products</h3>
        <ul>
          {user.favoriteProducts.map(product => (
            <li key={product.id}>
              <p>ID: {product.id}</p>
              <p>Name: {product.nom}</p>
              <p>Price: {product.prix}</p>
              <p>Purchase Price: {product.prixAchat}</p>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}

export default UserProfile;
