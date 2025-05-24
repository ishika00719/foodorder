import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { clearCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

function Checkout() {
  const cartItems = useSelector((state) => state.cart?.cart || []);
  const navigate = useNavigate();

const dispatch = useDispatch(); // ✅ now dispatch will work
  const totalPrice = cartItems.reduce((acc, item) => {
    const price = item.offerPrice || 0;
    const qty = item.quantity || 1;
    return acc + price * qty;
  }, 0);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const orderDetails = {
      orderId: uuidv4(),
      name,
      email,
      address,
      paymentMethod,
      cardNumber: paymentMethod === 'credit-card' ? cardNumber : null,
      expiryDate: paymentMethod === 'credit-card' ? expiryDate : null,
      items: cartItems,
      totalPrice,
      date: new Date().toISOString()
    };
  
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, orderDetails]));
  
    // 👉 Clear the cart after placing the order
    dispatch(clearCart());
  
    alert(`Order placed successfully! Order ID: ${orderDetails.orderId}\nTotal: ₹${totalPrice.toFixed(2)}`);
    navigate('/thankyou', { state: orderDetails });
  };
  

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger"style={{ fontFamily: "'Dancing Script', cursive",  }}>Checkout</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Shipping Information</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>

            <h4>Payment Method</h4>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="credit-card" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={() => setPaymentMethod('credit-card')} />
              <label className="form-check-label" htmlFor="credit-card">Credit Card</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="paymentMethod" id="cash-on-delivery" value="cash-on-delivery" checked={paymentMethod === 'cash-on-delivery'} onChange={() => setPaymentMethod('cash-on-delivery')} />
              <label className="form-check-label" htmlFor="cash-on-delivery">Cash on Delivery</label>
            </div>

            {paymentMethod === 'credit-card' && (
              <div>
                <div className="mb-3">
                  <label htmlFor="cardNumber" className="form-label">Card Number</label>
                  <input type="text" className="form-control" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                  <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv" className="form-label">CVV</label>
                  <input type="text" className="form-control" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />
                </div>
              </div>
            )}

            <div className="text-center mt-4">
              <button className="btn btn-danger" type="submit"style={{ fontFamily: "'Dancing Script', cursive",  }}>Complete Checkout</button>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <h4>Order Summary</h4>
          <div className="list-group">
            {cartItems.map((item) => (
              <div key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
                <span>{item.name}</span>
                <span>₹{(item.offerPrice * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-between mt-3">
            <h5>Total Price:</h5>
            <h5>₹{totalPrice.toFixed(2)}</h5>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to="/cart" className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive",  }}>Back to Cart</Link>
      </div>
    </div>
  );
}

export default Checkout;