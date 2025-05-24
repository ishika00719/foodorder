import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Desserts category
const dessertProducts = [
  {
    id: 1,
    name: "Chocolate Cake",
    image: "./images/chocolate-cake.jpg",  // Replace with your actual image paths
    price: 600,
    offerPrice: 500,
    rating: 5,
  },
  {
    id: 2,
    name: "Strawberry Cheesecake",
    image: "https://th.bing.com/th/id/OIP.HzqhGw62yGpyhY9detV96gHaLH?rs=1&pid=ImgDetMain",
    price: 800,
    offerPrice: 700,
    rating: 4,
  },
  {
    id: 3,
    name: "Tiramisu",
    image: "https://th.bing.com/th/id/OIP.KIKezk9w3iwqRdL__0p6AwHaHa?rs=1&pid=ImgDetMain",
    price: 900,
    offerPrice: 500,
    rating: 5,
  },
  {
    id: 4,
    name: "Lemon Meringue Pie",
    image: "https://th.bing.com/th/id/OIP._6DbCPvB5MX4Vky6gSWIeAHaHa?rs=1&pid=ImgDetMain",
    price: 600,
    offerPrice: 400,
    rating: 4,
  },
  {
    id: 5,
    name: "Banoffee Pie",
    image: "https://natashaskitchen.com/wp-content/uploads/2018/09/Banoffee-Pie-13.jpg",
    price: 600,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 6,
    name: "Apple Crumble",
    image: "https://www.modernhoney.com/wp-content/uploads/2022/09/Apple-Crumble-Recipe-1-scaled.jpg",
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Vanilla Panna Cotta",
    image: "https://myfoodstory.com/wp-content/uploads/2021/02/How-to-make-Panna-Cotta-Classic-Vanilla-3.jpg?fit=1200",  // Add actual image path
    price: 750,
    offerPrice: 650,
    rating: 5,
  },
  {
    id: 8,
    name: "Chocolate Mousse",
    image: "https://www.cookingclassy.com/wp-content/uploads/2020/02/chocolate-mousse-8.jpg",  // Add actual image path
    price: 700,
    offerPrice: 600,
    rating: 4,
  },
  {
    id: 9,
    name: "Macarons (Set of 6)",
    image: "https://www.piesandtacos.com/wp-content/uploads/2020/12/creme-brulee-macarons-9-683x1024.jpg",  // Add actual image path
    price: 600,
    offerPrice:550,
    rating: 5,
  },
  {
    id: 10,
    name: "Carrot Cake",
    image: "https://minimalistbaker.com/wp-content/uploads/2017/06/THE-BEST-Vegan-Gluten-Free-Carrot-Cake-1-Bowl-rich-moist-with-5-FROSTING-options-vegan-glutenfree-carrotcake-cake-recipe-minimalistbaker-4.jpg",  // Add actual image path
    price: 800,
    offerPrice: 700,
    rating: 3,
  },
  {
    id: 11,
    name: "Raspberry Sorbet",
    image: "https://www.lecremedelacrumb.com/wp-content/uploads/2014/06/raspberry-sorbet-1.jpg",  // Add actual image path
    price: 600,
    offerPrice: 550,
    rating: 4,
  },
  {
    id: 12,
    name: "Peach Cobbler",
    image: "https://www.cookingclassy.com/wp-content/uploads/2018/04/peach-cobbler-14.jpg",  // Add actual image path
    price: 900,
    offerPrice: 800,
    rating: 4,
  },
];

function Desserts() {
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
        className="dessert-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // A sweet pink color to represent desserts
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold fs-2 fw-bold "style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Delicious Desserts</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Indulge in our mouthwatering desserts, made to satisfy your sweet cravings.</p>
      </div>

      {/* Dessert Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {dessertProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top dessert-image"
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
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default Desserts;
