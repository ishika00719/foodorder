import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Japanese cuisine category
const japaneseCuisineProducts = [
  {
    id: 1,
    name: "Sushi Rolls",
    image: "https://th.bing.com/th/id/OIP.e8fq3PIAtq0gh4PYkXNmFAHaE8?rs=1&pid=ImgDetMain",  // Replace with your actual image paths
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 2,
    name: "Ramen",
    image: "https://www.anunblurredlady.com/wp-content/uploads/2018/08/ramen-recipes-4.jpg",
    price: 900,
    offerPrice: 850,
    rating: 4,
  },
  {
    id: 3,
    name: "Tempura",
    image: "https://th.bing.com/th/id/OIP.JYx4XYFzQJdtPoADs4i-zAAAAA?rs=1&pid=ImgDetMain",
    price: 750,
    offerPrice: 600,
    rating: 5,
  },
  {
    id: 4,
    name: "Teriyaki Chicken",
    image: "https://th.bing.com/th/id/OIP.iwohAsh4eThwneMompTNeQHaLH?rs=1&pid=ImgDetMain",
    price: 700,
    offerPrice: 600,
    rating: 4,
  },
  {
    id: 5,
    name: "Miso Soup",
    image: "https://th.bing.com/th/id/OIP.E0C_cG3dMLAqk_vIwGC6GgHaE8?rs=1&pid=ImgDetMain",
    price: 300,
    offerPrice: 250,
    rating: 5,
  },
  {
    id: 6,
    name: "Gyoza",
    image: "https://th.bing.com/th/id/OIP.SjfmHvGATHETr4vVWCCTsgHaHa?rs=1&pid=ImgDetMain",
    price: 650,
    offerPrice: 500,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Unagi Don",
    image: "https://thebigmansworld.com/wp-content/uploads/2022/08/unagi-2-768x1152.jpg",  // Add actual image path
    price: 950,
    offerPrice: 900,
    rating: 4,
  },
  {
    id: 8,
    name: "Sashimi",
    image: "https://th.bing.com/th/id/OIP.bbSXN1SmmXzs16LDvPNIpAHaE8?rs=1&pid=ImgDetMainv",  // Add actual image path
    price: 800,
    offerPrice: 700,
    rating: 5,
  },
  {
    id: 9,
    name: "Edamame",
    image: "https://reciperunner.com/wp-content/uploads/2019/09/Asian-Edamame-Salad-Picture-680x957.jpg",  // Add actual image path
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 10,
    name: "Japanese Cheesecake",
    image: "https://bakewithshivesh.com/wp-content/uploads/2020/07/5C20062B-BEBF-4D70-827A-D412AF90C0B8.jpeg",  // Add actual image path
    price: 750,
    offerPrice: 600,
    rating: 3,
  },
  {
    id: 11,
    name: "Okonomiyaki",
    image: "https://i0.wp.com/fullofplants.com/wp-content/uploads/2017/10/the-best-vegan-okonomiyaki-gluten-free-with-jackfruit-thumb-3.jpg?fit=1400%2C1400&ssl=1",  // Add actual image path
    price: 800,
    offerPrice: 700,
    rating: 5,
  },
  {
    id: 12,
    name: "Katsu Curry",
    image: "https://th.bing.com/th/id/OIP.Lxu37v23BNwjGt-o0IPWoQHaHa?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 1100,
    offerPrice: 900,
    rating: 4,
  },
];

function JapaneseCuisine() {
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
        className="japanese-cuisine-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a Japanese theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }} >Japanese Cuisine</h1>
        <p  style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Indulge in the delicious and authentic flavors of Japanese food.</p>
      </div>

      {/* Japanese Cuisine Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {japaneseCuisineProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top japanese-cuisine-image"
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

export default JapaneseCuisine;
