import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from './api';

const Category = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await API.get(`/products?category=${category}`);
      setProducts(data);
    };
    fetchProducts();
  }, [category]);

  // useEffect(() => {
  //   fetch('https://fakestoreapi.com/products')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(error => console.error('Error fetching products:', error));
  // }, []);
  


  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Category;
