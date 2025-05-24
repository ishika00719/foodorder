import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Indian cuisine category
const indianCuisineProducts = [
  {
    id: 1,
    name: "Butter Chicken",
    image: "https://th.bing.com/th/id/OIP.HJ1bHapA9EzKocBWpObwLgHaJ4?rs=1&pid=ImgDetMain",  // Replace with your actual image paths
    price: 1200, // Original price
    offerPrice: 1000, // Offer price
    rating: 5, // Rating out of 5
  },
  {
    id: 2,
    name: "Paneer Tikka",
    image: "https://ministryofcurry.com/wp-content/uploads/2021/01/Paneer-Tikka_-2-1.jpg",
    price: 500,
    offerPrice: 400,
    rating: 4,
  },
  {
    id: 3,
    name: "Samosa",
    image: "https://www.recipetineats.com/wp-content/uploads/2021/02/Samosas-on-plate.jpg",
    price: 200,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 4,
    name: "Chole Bhature",
    image: "https://tastycurryrestaurantandpizza.com/wp-content/uploads/2020/06/chole-bhature.jpg",
    price: 200,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 5,
    name: "Biryani",
    image: "https://www.thespruceeats.com/thmb/SalyKjzBU-K1Bv-FTFWnbd6ckjY=/2121x1414/filters:fill(auto,1)/GettyImages-639704020-5c4a63ecc9e77c00017bfebf.jpg",
    price: 150,
    offerPrice: 130,
    rating: 5,
  },
  {
    id: 6,
    name: "Aloo Gobi",
    image: "https://veenaazmanov.com/wp-content/uploads/2012/10/Aloo-Gobi-Indian-Cauliflower-with-Potates24.jpg",
    price: 150,
    offerPrice: 120,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Pani Puri",
    image: "https://th.bing.com/th/id/R.65909bc7f81dc4ee660ea4546348d5da?rik=DWTsc9dnyCgJTg&riu=http%3a%2f%2fimages.deliveryhero.io%2fimage%2ffoodpanda%2frecipes%2fpani-puri-recipe-1.png&ehk=qzZhmkehRcmQ00kNVh%2bVzTw%2fr8rmmkjUt84WJLNoHHA%3d&risl=&pid=ImgRaw&r=0",  // Add actual image path
    price: 200,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 8,
    name: "Tandoori Roti",
    image: "https://thumbs.dreamstime.com/z/tandoori-roti-paneer-butter-masala-punjabi-vegetarian-meal-served-226657267.jpg",  // Add actual image path
    price: 100,
    offerPrice: 75,
    rating: 5,
  },
  {
    id: 9,
    name: "Dosas",
    image: "https://th.bing.com/th/id/OIP.6Nx_C1m4YCujBiHe48YpHAHaE8?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 10,
    name: "Lassi",
    image: "https://www.whiskaffair.com/wp-content/uploads/2021/07/Sweet-Lassi-2-1-1200x1800.jpg",  // Add actual image path
    price: 150,
    offerPrice: 100,
    rating: 3,
  },
  {
    id: 11,
    name: "Gulab Jamun",
    image: "https://th.bing.com/th/id/OIP.dWdRCyWc7LjqXX6PuZVSawHaK2?w=768&h=1125&rs=1&pid=ImgDetMain",  // Add actual image path
    price: 400,
    offerPrice: 350,
    rating: 5,
  },
  {
    id: 12,
    name: "Pav Bhaji",
    image: "https://www.cookwithkushi.com/wp-content/uploads/2016/10/best_mumbai_street_style_pav_bhaji_recipe.jpg",  // Add actual image path
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
];

function IndianCuisine() {
  const dispatch = useDispatch(); // Initialize dispatch to send actions

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to add the product to the cart

    // Display success toast when product is added to cart
    toast.success(`${product.name} has been added to the Orders!`);
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="indian-cuisine-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Indian Cuisine</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Experience the flavors of India with our special cuisine collection.</p>
      </div>

      {/* Indian Cuisine Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {indianCuisineProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top indian-cuisine-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>

                  {/* Price Display with Offer Price */}
                  <h5 className="card-text">
                    <span style={{ textDecoration: 'line-through', color: '#888' }}>
                    Rs.{product.price.toFixed(2)}
                    </span>
                    <span className="text-success mx-2">
                      <strong>{Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF</strong>
                    </span>
                    Rs.{product.offerPrice.toFixed(2)} {/* Offer price displayed */}
                  </h5>

                  {/* Star Rating */}
                  <div className="d-flex my-3">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product.rating ? (
                          <FaStar color="gold" className="fs-3" />
                        ) : (
                          <FaRegStar color="gold" className="fs-3" />
                        )}
                      </span>
                    ))}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="btn btn-danger" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }} onClick={() => handleAddToCart(product)}>
                    Order Now 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default IndianCuisine;
