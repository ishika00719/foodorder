import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

function AdminDashboard() {
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch orders from localStorage and remove duplicates
    const fetchedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    const uniqueOrders = Array.from(new Map(fetchedOrders.map(order => [order.orderId, order])).values());
    setOrders(uniqueOrders);

    // Fetch contacts from MongoDB
    axios.get('http://localhost:5000/api/contact')
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));

    // Fetch reviews from MongoDB
    axios.get('http://localhost:5000/api/reviews')
      .then(response => setReviews(response.data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const updateOrderStatus = (orderId, status) => {
    const updatedOrders = orders.map(order =>
      order.orderId === orderId ? { ...order, status } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders));
  };

  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem('orders');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  // Function to delete a review with optimistic UI update and error handling
  const deleteReview = async (id) => {
    try {
      console.log('Deleting review with ID:', id); // Debugging line to check if delete is triggered

      // Optimistically remove the review from the state
      setReviews(prevReviews => prevReviews.filter(review => review._id !== id));

      // Send delete request to backend to remove the review by ID
      await axios.delete(`http://localhost:5000/api/reviews/${id}`);
      console.log('Review deleted successfully'); // Debugging line to confirm deletion

    } catch (error) {
      console.error('Error deleting review:', error);

      // In case of an error, revert the optimistic update by re-fetching reviews
      axios.get('http://localhost:5000/api/reviews')
        .then(response => setReviews(response.data))
        .catch(error => console.error('Error fetching reviews after deletion:', error));
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 bg-dark text-white p-4">
          <h3>Admin Panel</h3>
          <ul className="list-unstyled">
            {/* Additional sidebar links can be added here */}
          </ul>
          <button className="btn btn-danger mt-3" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="col-md-10 p-4">
          {/* Orders Section */}
          <h2>Orders</h2>
          <button className="btn btn-danger mb-3" onClick={clearOrders}>
            Clear All Orders
          </button>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Items Ordered</th>
                <th>Total Price</th>
                <th>Order Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">No orders found</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.items.length} item{order.items.length > 1 ? 's' : ''}</td>
                    <td>₹{order.totalPrice.toFixed(2)}</td>
                    <td>{new Date(order.date).toLocaleString()}</td>
                    <td>
                      <span className={`badge ${order.status === 'Delivered' ? 'bg-success' : 'bg-warning'}`}>
                        {order.status || 'Pending'}
                      </span>
                    </td>
                    <td>
                      <button 
                        className="btn btn-primary btn-sm me-2" 
                        onClick={() => updateOrderStatus(order.orderId, 'Delivered')}
                        disabled={order.status === 'Delivered'}
                      >
                        Deliver
                      </button>
                      <button 
                        className="btn btn-warning btn-sm me-2" 
                        onClick={() => updateOrderStatus(order.orderId, 'Pending')}
                      >
                        Pending
                      </button>
                      <Link to={`/admin/orders/${order.orderId}`} className="btn btn-info btn-sm me-2">View</Link>
                      <Link to={`/admin/users/${order.userId}`} className="btn btn-secondary btn-sm">View User</Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>

          {/* Contact Form Section */}
          <h2>Contact Requests</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Date</th>
              </tr>
            </thead>
            <body>
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center">No contact requests available</td>
                </tr>
              ) : (
                contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.message}</td>
                    <td>{format(new Date(contact.date), 'dd/MM/yyyy HH:mm')}</td>
                  </tr>
                ))
              )}
            </body>
          </table>

          {/* Review Section */}
          <h2>Food Reviews</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Comment</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center">No reviews available</td>
                </tr>
              ) : (
                reviews.map((review) => (
                  <tr key={review._id}>
                    <td>{review.name}</td>
                    <td>{review.rating} ⭐</td>
                    <td>{review.comment}</td>
                    <td>{format(new Date(review.date), 'dd/MM/yyyy HH:mm')}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteReview(review._id)}>Delete</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
