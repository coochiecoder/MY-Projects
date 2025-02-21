import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products.');
      });
  }, []);

  return (
    <div>
      <h1>ClothesShop</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="products">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.description} />
              <Link to={`/products/${product.id}`}>
                <h2>{product.title}</h2>
              </Link>
              <h3>{product.category}</h3>
              <p>${product.price}</p>
              <Link to={`/cart`}>
                <button>Add to Cart</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
