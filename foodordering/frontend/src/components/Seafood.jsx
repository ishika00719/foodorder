import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Seafood category
const seafoodProducts = [
  {
    id: 1,
    name: "Grilled Salmon",
    image: "https://www.ambitiouskitchen.com/wp-content/uploads/2021/06/How-to-Grill-Salmon-7.jpg",  // Replace with your actual image paths
    price: 15.00,
    offerPrice: 13.50,
    rating: 5,
  },
  {
    id: 2,
    name: "Shrimp Cocktail",
    image: "https://i.pinimg.com/originals/4b/ad/fd/4badfd2fd2bb597af7b7403ca5411a71.jpg",
    price: 12.00,
    offerPrice: 10.50,
    rating: 4,
  },
  {
    id: 3,
    name: "Lobster Tail",
    image: "https://diethood.com/wp-content/uploads/2021/02/lobster-tails-12-1024x1536.jpg",
    price: 25.00,
    offerPrice: 22.50,
    rating: 5,
  },
  {
    id: 4,
    name: "Fish Tacos",
    image: "https://th.bing.com/th/id/OIP.La0wh7ld3R9NKG1TdI3wUwHaLH?w=1480&h=2220&rs=1&pid=ImgDetMain",
    price: 10.00,
    offerPrice: 9.00,
    rating: 4,
  },
  {
    id: 5,
    name: "Crab Cakes",
    image: "https://www.deliciousmeetshealthy.com/wp-content/uploads/2021/06/Crab-Cakes-8-1021x1536.jpg",
    price: 18.00,
    offerPrice: 15.00,
    rating: 5,
  },
  {
    id: 6,
    name: "Oysters on the Half Shell",
    image: "https://i.pinimg.com/originals/d6/98/08/d69808dbf1e721495980ec9940776a7e.jpg",
    price: 14.00,
    offerPrice: 12.50,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Mussels in White Wine Sauce",
    image: "https://th.bing.com/th/id/OIP.HqEzQIySatXUVi6nwgfIbQHaHP?rs=1&pid=ImgDetMains",  // Add actual image path
    price: 20.00,
    offerPrice: 18.00,
    rating: 5,
  },
  {
    id: 8,
    name: "Clam Chowder",
    image: "https://thecozycook.com/wp-content/uploads/2022/10/Clam-Chowder-2-700x740.jpg",  // Add actual image path
    price: 8.50,
    offerPrice: 7.50,
    rating: 4,
  },
  {
    id: 9,
    name: "Grilled Tuna Steaks",
    image: "https://www.liverdoctor.com/wp/wp-content/uploads/2016/07/Liver-Doctor-Grilled-Tuna-Steaks.jpg",  // Add actual image path
    price: 22.00,
    offerPrice: 20.00,
    rating: 5,
  },
  {
    id: 10,
    name: "Seafood Paella",
    image: "https://th.bing.com/th/id/OIP.sf86bqZ6KFV6U_dO4Z4DfAHaLH?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 24.00,
    offerPrice: 21.00,
    rating: 4,
  },
  {
    id: 11,
    name: "Sushi Rolls",
    image: "https://th.bing.com/th/id/R.2db6467796f7573e74d0cbc813ad42ca?rik=%2biLhhIrrcvMKeg&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f568e8fe6b204d5cbecd5c77e%2f56915062d82d5eff6cba017c%2f63fe4f8e97ec715482886eec%2f1681324538719%2fCucumber%2bSushi-0906-3.jpg%3fformat%3d1500w&ehk=4C120l34Ds%2fAYOeSPHM2sjQAjNYAQSpF6o0Tm16ZFFc%3d&risl=&pid=ImgRaw&r=0",  // Add actual image path
    price: 15.00,
    offerPrice: 13.00,
    rating: 5,
  },
  {
    id: 12,
    name: "Fish and Chips",
    image: "https://th.bing.com/th/id/OIP.4GL4CN1SGfjf83lp88MtPwHaHa?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 12.00,
    offerPrice: 10.50,
    rating: 4,
  },
];

function Seafood() {
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
        className="seafood-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a cool ocean or seafood theme
        }} 
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold"  style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Seafood</h1>
        <p  style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Indulge in our fresh and delicious seafood dishes straight from the ocean.</p>
      </div>

      {/* Seafood Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {seafoodProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top seafood-image"
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

export default Seafood;
