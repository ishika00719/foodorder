import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/actions/cartActions'; // make sure these exist
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart?.cart || []);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
    toast.error('Item removed from Orders!');
  };

  const handleIncrement = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrement = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.offerPrice * item.quantity, 0);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '40px' }}>
        Your <span className='text-danger'>Orders</span> 
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.id} className="col-12 col-md-6 mb-4">
              <div className="card shadow-sm border-light d-flex flex-row flex-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  className="rounded-start"
                />
                <div className="card-body d-flex flex-column justify-content-between flex-grow-1">
                  <div className="d-flex flex-column flex-md-row justify-content-between">
                    <div>
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text text-success fw-bold">Rs.{item.offerPrice}</p>
                    </div>
                    <div className="d-flex align-items-center mt-2 mt-md-0">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={() => handleDecrement(item.id)}
                        disabled={item.quantity <= 1}
                      >
                        –
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm ms-2"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-outline-danger btn-sm mt-3"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="col-12 mt-4">
            <div className="card p-4 shadow-sm text-end">
              <h4>Total: Rs.{calculateTotal()}</h4>
              <Link to="/checkout" className="btn btn-danger mt-2" style={{ fontFamily: "'Dancing Script', cursive", fontSize: '22px' }}>
  Proceed to Checkout
</Link>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default Cart;
