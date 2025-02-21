// src/views/ProductDetail.js
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching product data: ", err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <h1 className="product-title">{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-category">Category: {product.category}</p>
    </div>
  );
};

export default ProductDetail;
