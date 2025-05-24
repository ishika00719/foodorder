import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Vegetarian and Vegan category
const vegetarianVeganProducts = [
  {
    id: 1,
    name: "Vegan Pancakes with Maple Syrup",
    image: "https://th.bing.com/th/id/OIP.6Y7pteFtCrgqe9yQ68Yy0AHaLH?rs=1&pid=ImgDetMain",  // Replace with actual image paths
    price: 800,
    offerPrice: 700,
    rating: 5,
  },
  {
    id: 2,
    name: "Vegan Scrambled Tofu",
    image: "https://th.bing.com/th/id/OIP.KNWCEghcmEh_rOAQhPJtvwHaLH?rs=1&pid=ImgDetMain",
    price: 600,
    offerPrice: 550,
    rating: 4,
  },
  {
    id: 3,
    name: "Vegetarian Bacon and Avocado Toast",
    image: "https://jawnsicooked.com/wp-content/uploads/2019/10/Bacon-Avocado-Toast-with-feta-and-balsamic-6-scaled-e1692675952926.jpg",
    price: 180,
    offerPrice: 150,
    rating: 5,
  },
  {
    id: 4,
    name: "Vegan French Toast",
    image: "https://jessicainthekitchen.com/wp-content/uploads/2021/01/Vegan-French-Toast-42.jpg",
    price: 750,
    offerPrice: 650,
    rating: 4,
  },
  {
    id: 5,
    name: "Vegan Avocado Toast with Cherry Tomatoes",
    image: "https://img.freepik.com/premium-photo/vegan-avocado-toast-with-cherry-tomatoes_198067-3337.jpg",
    price: 900,
    offerPrice: 800,
    rating: 5,
  },
  {
    id: 6,
    name: "Vegan Omelette (Chickpea Flour)",
    image: "https://th.bing.com/th/id/OIP.RWGgj32Z6BfS9rdhQTxUkAHaJQ?rs=1&pid=ImgDetMain",
    price: 850,
    offerPrice: 750,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Vegan Bagels with Cashew Cream Cheese",
    image: "https://www.therawchef.com/content/images/wordpress/2019/10/raw-vegan-bagels-2-900x1125.jpg",  // Add actual image path
    price: 500,
    offerPrice: 450,
    rating: 5,
  },
  {
    id: 8,
    name: "Vegan Breakfast Burrito",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/03/vegan-breakfast-burrito-2.jpg",  // Add actual image path
    price: 950,
    offerPrice: 800,
    rating: 4,
  },
  {
    id: 9,
    name: "Waffles with Fruit (Vegan)",
    image: "https://th.bing.com/th/id/OIP.FsuWDbRwCDZU7KFYXy29HgHaHa?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 800,
    offerPrice: 700,
    rating: 5,
  },
  {
    id: 10,
    name: "Vegan Smoothie Bowl",
    image: "https://th.bing.com/th/id/OIP.QG-af7i8nVi4bvRXfOwjOQHaLI?w=1022&h=1536&rs=1&pid=ImgDetMain",  // Add actual image path
    price: 600,
    offerPrice: 550,
    rating: 4,
  },
  {
    id: 11,
    name: "Vegan Granola with Plant-Based Yogurt",
    image: "https://th.bing.com/th/id/OIP.hz9FkEAjhA_lYNpCR8XdsQHaLH?w=1500&h=2250&rs=1&pid=ImgDetMain",  // Add actual image path
    price: 750,
    offerPrice: 650,
    rating: 5,
  },
  {
    id: 12,
    name: "Fruit Salad (Vegan)",
    image: "https://bing.com/th?id=OSK.0241a21e4e4f52e8af021d4d48c002dd",  // Add actual image path
    price: 550,
    offerPrice: 500,
    rating: 4,
  },
];

function VegetarianVeganBreakfast() {
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
        className="vegetarian-vegan-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a fresh vegetarian/vegan theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Vegetarian & Vegan Breakfast</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Delicious plant-based meals to kickstart your day!</p>
      </div>

      {/* Vegetarian and Vegan Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {vegetarianVeganProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top vegan-breakfast-image"
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

export default VegetarianVeganBreakfast;
