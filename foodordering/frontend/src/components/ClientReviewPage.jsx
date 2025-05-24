import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ClientReviewPage() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  // Fetch reviews from the backend when the component mounts or after adding a new review
  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.log('Error fetching reviews:', error);
    }
  };

  // Fetch reviews when the component mounts
  useEffect(() => {
    fetchReviews();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      name,
      rating,
      comment
    };

    // Send new review to backend
    axios.post('http://localhost:5000/api/reviews', newReview)
      .then((response) => {
        // After submitting, re-fetch reviews to ensure the list is updated
        fetchReviews();

        // Clear form inputs
        setName('');
        setRating(1);
        setComment('');
      })
      .catch((error) => {
        console.log('Error submitting review:', error);
      });
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 title">Food Villa- <span className='text-danger'>Client Reviews</span> </h1>

      {/* Reviews Grid */}
      <div className="row">
        {reviews.map((review) => (
          <div key={review._id} className="col-md-4 mb-4"> {/* Grid column for each review */}
            <div className="card shadow-sm border-light">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <div className="d-flex justify-content-start">
                  {[...Array(5)].map((star, index) => (
                    <span
                      key={index}
                      className={`fa fa-star ${index < review.rating ? 'text-warning' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <p className="card-text">{review.comment}</p>
                <footer className="blockquote-footer">
                  <small>{new Date(review.date).toLocaleDateString()}</small>
                </footer>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1 className="text-center mb-4 title">Leave <span className='text-danger'>Review</span> </h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-4">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="rating" className="form-label">Rating</label>
            <select
              id="rating"
              className="form-select"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              required
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Food Review</label>
          <textarea
            className="form-control"
            id="comment"
            rows="4"
            placeholder="Write your review here"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger">Submit Review</button>
      </form>
    </div>
  );
}

export default ClientReviewPage;
