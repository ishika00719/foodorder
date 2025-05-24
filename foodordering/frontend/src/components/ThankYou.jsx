import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function ThankYou() {
  const location = useLocation(); // Get passed state from Checkout page
  const { orderId, items = [], totalPrice } = location.state || {}; // Destructure the order details with fallback values

  useEffect(() => {
    // Clear the cart after order is placed
    clearCart();
    // Save the order details to the Orders page
    if (orderId) {
      const order = {
        orderId,
        items,
        totalPrice,
        date: new Date().toLocaleString(),
      };
      saveOrder(order);
    }
  }, [orderId, items, totalPrice]);

  // Function to clear the cart from localStorage
  const clearCart = () => {
    localStorage.removeItem('cart'); // Clear cart data from localStorage
  };

  // Function to save the order to localStorage (or could be an API call)
  const saveOrder = (order) => {
    let orders = JSON.parse(localStorage.getItem('orders')) || []; // Get the current orders from localStorage
    orders.push(order); // Add the new order to the list
    localStorage.setItem('orders', JSON.stringify(orders)); // Save the updated orders list
  };

  return (
    <div className="container my-5">
      <h2 className="text-center text-danger mb-4"style={{ fontFamily: "'Dancing Script', cursive"}}>Thank You for Your Order!</h2>

      <div className="row">
        <div className="col-md-6">
          <h4>Order Details</h4>
          <p><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Total Price:</strong> ₹{totalPrice?.toFixed(2) || '0.00'}</p>
        </div>

        <div className="col-md-6">
          <h4>Items Ordered</h4>
          <ul className="list-group">
            {items.length === 0 ? (
              <li className="list-group-item">No items in your order.</li>
            ) : (
              items.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                  <span>{item.name}</span>
                  <span>₹{(item.offerPrice * item.quantity).toFixed(2)}</span>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default ThankYou;
