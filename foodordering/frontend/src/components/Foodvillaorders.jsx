// FoodVillaOrders.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, incrementItem, decrementItem, clearCart } from '../redux/actions/actionTypes';
import  './foodvillaorders.css';

const FoodVillaOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cartItems);

  const handleAddToOrders = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromOrders = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleIncrementItem = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrementItem = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const handleClearOrders = () => {
    dispatch(clearCart());
  };

  return (
    <div className="orders-container" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>
      <h2>Food <span className='text-danger' >Villa Orders</span></h2>
      
      <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}> Order Page Is Empty</p>
      <button className="clear-btn" onClick={handleClearOrders}>Clear Orders</button>
      <ul className="orders-list">
        {orders.map((item) => (
          <li key={item.id} className="order-item">
            {item.name} - {item.quantity} 
            <button className="order-btn"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }} onClick={() => handleIncrementItem(item.id)}>+</button>
            <button className="order-btn"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }} onClick={() => handleDecrementItem(item.id)}>-</button>
            <button className="remove-btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }} onClick={() => handleRemoveFromOrders(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default FoodVillaOrders;
