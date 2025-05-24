import React from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from Redux
import { addToCart } from '../redux/actions/cartActions'; // Import action for adding to cart
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS

// Example products for the Italian Cuisine category
const italianCuisineProducts = [
  {
    id: 1,
    name: "Fresh Spaghetti",
    image: "https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg", // Replace with actual image path
    price: 1000,
    offerPrice: 850,
    rating: 4,
  },
  {
    id: 2,
    name: "Margherita Pizza",
    image: "https://images.ricardocuisine.com/services/recipes/pizza-1498148703.jpg",
    price: 1500,
    offerPrice: 1200,
    rating: 5,
  },
  {
    id: 3,
    name: "Balsamic Vinegar",
    image: "https://th.bing.com/th/id/OIP.XYOxFQDkORLtJf0FiwYfuQHaE5?rs=1&pid=ImgDetMain",
    price: 600,
    offerPrice: 500,
    rating: 4,
  },
  {
    id: 4,
    name: "Italian Olive Oil",
    image: "https://foolproofliving.com/wp-content/uploads/2019/10/Olive-Oil-Bread-Dip.jpg",
    price: 250,
    offerPrice: 220,
    rating: 5,
  },
  {
    id: 5,
    name: "Tiramisu Dessert",
    image: "https://howtomakerecipes.com/wp-content/uploads/2021/08/tiramisu-classic-italian-no-bake-dessert-video-recipe1.jpg",
    price: 800,
    offerPrice: 700,
    rating: 4,
  },
  {
    id: 6,
    name: "Pesto Sauce",
    image: "https://th.bing.com/th/id/OIP.28HhsGIwqfqxKt8Zb_j9oAHaLH?rs=1&pid=ImgDetMain",
    price: 120,
    offerPrice: 100,
    rating: 5,
  },
  {
    id: 7,
    name: "Risotto Rice",
    image: "https://th.bing.com/th/id/OIP.CeV5Kw9gZFlqV5B0BKELFgHaE7?rs=1&pid=ImgDetMain",  // Replace with actual image path
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 8,
    name: "Lasagna",
    image: "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-13-scaled.jpg", // Replace with actual image path
    price: 700,
    offerPrice: 600,
    rating: 4,
  },
  {
    id: 9,
    name: "Caprese Salad",
    image: "https://poshplate.us/wp-content/uploads/2020/07/salad-33.jpg",  // Replace with actual image path
    price: 200,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 10,
    name: "Italian Cannoli",
    image: "https://i.pinimg.com/originals/37/2e/e8/372ee841e7b304d8f97320ad97fbd6e3.jpg",  // Replace with actual image path
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 11,
    name: "Focaccia Bread",
    image: "https://th.bing.com/th/id/OIP.r4vaSwfMAMPzpEKAhPOwqgHaHa?rs=1&pid=ImgDetMain",  // Replace with actual image path
    price: 300,
    offerPrice: 200,
    rating: 4,
  },
  {
    id: 12,
    name: "Italian Espresso",
    image: "https://th.bing.com/th/id/OIP.b8C49yXZPzJpHppifV0nSgHaFj?rs=1&pid=ImgDetMain",  // Replace with actual image path
    price: 400,
    offerPrice: 350,
    rating: 5,
  },
];

function ItalianCuisine() {
  const dispatch = useDispatch(); // Initialize dispatch

  // Handle add to cart functionality
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the action to add product to the cart
    toast.success(`${product.name} has been added to your Orders!`); // Show toast notification
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="italian-banner"
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
        <h1 className="fw-bold"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Italian Cuisine</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Experience the finest flavors of Italy in every bite!</p>
      </div>

      {/* Italian Cuisine Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {italianCuisineProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top italian-image"
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
                      <strong>
                        {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
                      </strong>
                    </span>
                    Rs.{product.offerPrice.toFixed(2)}
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

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default ItalianCuisine;
