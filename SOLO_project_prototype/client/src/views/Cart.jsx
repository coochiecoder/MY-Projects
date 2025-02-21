import React, { useEffect, useState } from 'react';








const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
 const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json())
      .then(json => {
        console.log(json); 
        setCartItems(json);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
        setLoading(false);
      });
  }, []);

  //  useEffect(() => {
  //     fetch('https://fakestoreapi.com/products?limit=10')
  //       .then(res => res.json())
  //       .then(data => setProducts(data))
  //       .catch(error => {
  //         console.error('Error fetching products:', error);
  //         setError('Failed to load products.');
  //       });
  //   }, []);
  
  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(cart => (
            <li key={cart.id}>
              <h2>Cart ID {cart.id}</h2>
              <p>USER CART {cart.userId}, {cart.quantity} </p>
              <h3>Products:</h3>
              <ul>
                {/* {cart.products.map(product => (
                  <li key={cart.product.id}>
                    Product ID: {product.title}, Quantity: {cart.quantity}
                  </li>
                ))} */}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No items in cart.</p>
      )}
    </div>
  );
};

export default Cart;
