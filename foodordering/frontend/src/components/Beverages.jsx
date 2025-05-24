import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Beverages category
const BeveragesProducts = [
  {
    id: 1,
    name: "Mango Smoothie",
    image: "https://th.bing.com/th/id/OIP.nyMBv9f9gfn15qsorJWaUAHaLH?rs=1&pid=ImgDetMain",  // Replace with your actual image paths
    price: 250,
    offerPrice: 200,
    rating: 5,
  },
  {
    id: 2,
    name: "Iced Latte",
    image: "https://www.forkinthekitchen.com/wp-content/uploads/2022/09/220908.iced_.mint_.latte-3927.jpg",
    price: 300,
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 3,
    name: "Green Tea",
    image: "https://th.bing.com/th/id/OIP.5AqGtL_NMwFcExsRdVXvKwHaHa?rs=1&pid=ImgDetMain",
    price: 200,
    offerPrice: 150,
    rating: 5,
  },
  {
    id: 4,
    name: "Lemonade",
    image: "https://th.bing.com/th/id/OIP.G7ikTRPG9W-v0SMwGDvzuwHaLG?rs=1&pid=ImgDetMain",
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 5,
    name: "Coconut Water",
    image: "https://www.healthifyme.com/blog/wp-content/uploads/2021/12/Benefits-of-coconut-water.jpg",
    price: 120,
    offerPrice: 100,
    rating: 4,
  },
  {
    id: 6,
    name: "Cold Brew Coffee",
    image: "https://fedandfit.com/wp-content/uploads/2022/02/230322_how-to-make-cold-brew-38.jpg",
    price: 350,
    offerPrice: 300,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Strawberry Smoothie",
    image: "https://www.momontimeout.com/wp-content/uploads/2023/01/strawberry-banana-smoothie.jpeg",  // Add actual image path
    price: 300,
    offerPrice: 250,
    rating: 5,
  },
  {
    id: 8,
    name: "Chai Latte",
    image: "https://th.bing.com/th/id/OIP.6XbNSCaPDt92BosTYrpW_gHaLH?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 9,
    name: "Watermelon Juice",
    image: "https://momsdinner.net/wp-content/uploads/2020/05/watermelon-juice-recipe.jpg",  // Add actual image path
    price: 150,
    offerPrice: 100,
    rating: 5,
  },
  {
    id: 10,
    name: "Iced Matcha Latte",
    image: "https://www.butterbeready.com/wp-content/uploads/2023/07/DK6A3378.jpg",  // Add actual image path
    price: 350,
    offerPrice: 300,
    rating: 4,
  },
  {
    id: 11,
    name: "Fresh Orange Juice",
    image: "https://i.pinimg.com/originals/2d/77/4e/2d774e414042779b486e607e91cdf52e.jpg",  // Add actual image path
    price: 3.50,
    offerPrice: 3.00,
    rating: 5,
  },
  {
    id: 12,
    name: "Apple Cider Vinegar Drink",
    image: "https://lifestyleofafoodie.com/wp-content/uploads/2020/03/The-best-apple-cider-vinegar-drink-11-of-24.jpg",  // Add actual image path
    price: 250,
    offerPrice: 200,
    rating: 4,
  },
];

function Beverages() {
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
        className="beverages-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a vibrant, refreshing beverage theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Beverages</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Refresh yourself with our range of cool and delicious drinks.</p>
      </div>

      {/* Beverages Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {BeveragesProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top beverages-image"
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
                    Order Now                  </button>
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

export default Beverages;
