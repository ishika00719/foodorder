import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the BBQ and Grill category
const bbqAndGrillProducts = [
  {
    id: 1,
    name: "BBQ Ribs",
    image: "https://th.bing.com/th/id/OIP.Bh4Te5gCyxfKIgIpmwhebAHaE8?rs=1&pid=ImgDetMain",  // Replace with actual image paths
    price: 8.00,
    offerPrice: 6.00,
    rating: 5,
  },
  {
    id: 2,
    name: "Grilled Chicken Wings",
    image: "https://www.wholesomeyum.com/wp-content/uploads/2023/04/wholesomeyum-Baked-Chicken-Wings.jpg",
    price: 12.00,
    offerPrice: 10.00,
    rating: 4,
  },
  {
    id: 3,
    name: "Grilled Steak",
    image: "https://th.bing.com/th/id/OIP.KjN6lKETetKj1cmDr9bp8wHaFj?rs=1&pid=ImgDetMain",
    price: 25.00,
    offerPrice: 22.00,
    rating: 5,
  },
  {
    id: 4,
    name: "BBQ Pulled Pork",
    image: "https://th.bing.com/th/id/OIP.hielYO7BjORYKfyh7En1XwHaLH?rs=1&pid=ImgDetMain",
    price: 15.00,
    offerPrice: 13.50,
    rating: 4,
  },
  {
    id: 5,
    name: "Grilled Vegetables",
    image: "https://ifoodreal.com/wp-content/uploads/2018/04/grilled-vegetables.jpg",
    price: 10.00,
    offerPrice: 9.00,
    rating: 5,
  },
  {
    id: 6,
    name: "BBQ Burger",
    image: "https://th.bing.com/th/id/OIP.UWhwUuA7-bHiimPQIxwkNAHaHa?rs=1&pid=ImgDetMain",
    price: 140,
    offerPrice: 120,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Grilled Shrimp Skewers",
    image: "https://keeshaskitchen.com/wp-content/uploads/2022/04/Grilled-Shrimp-Skewers-1-819x1024.jpg",  // Add actual image path
    price: 200,
    offerPrice: 180,
    rating: 5,
  },
  {
    id: 8,
    name: "BBQ Chicken Thighs",
    image: "https://th.bing.com/th/id/OIP.9cXEIWevH2OPZSJOtih80AHaLH?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 500,
    offerPrice: 300,
    rating: 4,
  },
  {
    id: 9,
    name: "Grilled Lamb Chops",
    image: "https://keviniscooking.com/wp-content/uploads/2014/11/Mongolian-Grilled-Lamb-Loin-Chops1.jpg",  // Add actual image path
    price: 280,
    offerPrice: 240,
    rating: 5,
  },
  {
    id: 10,
    name: "BBQ Sausages",
    image: "https://playswellwithbutter.com/wp-content/uploads/2020/07/Grilled-Sausage-4-960x1419.jpg",  // Add actual image path
    price: 150,
    offerPrice: 100,
    rating: 4,
  },
  {
    id: 11,
    name: "Grilled Corn on the Cob",
    image: "https://th.bing.com/th/id/OIP.bdnoCfREEL4QVT-KCoBbUQHaLH?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 12,
    name: "BBQ Brisket",
    image: "https://th.bing.com/th/id/OIP.xAA4OIZYv0Oju_uZvbJm3gHaHa?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 220,
    offerPrice: 180,
    rating: 4,
  },
];

function BBQAndGrill() {
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
        className="bbq-grill-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'Darkred',  // Adjusted for a BBQ and Grill theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>BBQ and Grill</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Experience the smoky, charred goodness of our BBQ and Grill dishes!</p>
      </div>

      {/* BBQ and Grill Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {bbqAndGrillProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top bbq-grill-image"
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
                  <button className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }} onClick={() => handleAddToCart(product)}>
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default BBQAndGrill;
