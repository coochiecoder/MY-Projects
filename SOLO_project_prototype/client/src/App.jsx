import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home.jsx'; 
import Category from './views/Category.jsx';
import Cart from './views/Cart.jsx';
import ProductDetail from './views/ProductDetail.jsx';
import UserLogin from './views/UserLogin.jsx';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(response => {
        setData(response);
      })
      .catch(err => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  const onSearch = (query) => {
    console.log(query);
    fetch(`https://swapi.dev/api/${query}/`)
      .then(response => response.json())
      .then(response => {
        setSearchResults(response);
      })
      .catch(err => {
        console.error("Error searching data: ", err);
      });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/create/user" />} />
        <Route path="/create/user" element={<UserLogin />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
