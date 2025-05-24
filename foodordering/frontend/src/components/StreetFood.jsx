import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Street Food category
const streetFoodProducts = [
  {
    id: 1,
    name: "Manchourian",
    image: "https://th.bing.com/th/id/R.f367066227edd14c9383fa69666d810c?rik=I3tnIUZlUgQHdQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-XcHX0s2FC0E%2fU9mqNATImfI%2fAAAAAAAAF2U%2fwUvyLROY_6U%2fs1600%2fpici3.jpg&ehk=eYQDjYJE9A9Mt%2bCIcqMGn4mJvEVQnximdK3VUgrFYtc%3d&risl=&pid=ImgRaw&r=0",  // Replace with actual image paths
    price: 150,
    offerPrice: 125,
    rating: 5,
  },
  {
    id: 2,
    name: "Dahi Bhalle",
    image: "https://th.bing.com/th/id/R.0dc1522b7e41ea1052ebe8e06c5dfe38?rik=MvjOYDrfX74%2bXg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-dU2NUKla058%2fVBbBqtxodxI%2fAAAAAAAAAJ4%2fynIM87sP0vY%2fs1600%2fdahi-bhalle.jpg&ehk=sM%2f2Pu%2fjGGDAhuiKDX17auPfzyVfNdDKVh%2b9Y%2b216k4%3d&risl=&pid=ImgRaw&r=0",
    price: 175,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 3,
    name: "Aloo Tikki",
    image: "https://kingofspices.co.nz/wp-content/uploads/2023/10/Paneer-Aloo-Tikki-600x600.jpg",
    price: 250,
    offerPrice: 200,
    rating: 5,
  },
  {
    id: 4,
    name: "Noodles",
    image: "https://img.freepik.com/premium-photo/delicious-noodles-concept_970137-59062.jpg",
    price: 175,
    offerPrice: 120,
    rating: 4,
  },
  {
    id: 5,
    name: "Spring Roll",
    image: "https://th.bing.com/th/id/OIP.k14ICh_56BnTrelydq8OdQHaFC?w=224&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    price: 200,
    offerPrice: 150,
    rating: 5,
  },
  {
    id: 6,
    name: "Grilled Veggie Skewers",
    image: "https://minimalistbaker.com/wp-content/uploads/2017/05/EASY-DELICIOUS-Veggie-Skewers-w-Chimichurri-The-PERFECT-plant-based-option-for-grilling-season.-vegan-glutenfree-grilling-skewers-recipe-minimalistbaker-3-768x1152.jpg",
    price: 250,
    offerPrice: 200,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Street-Style Vegan Hot Dog",
    image: "https://thumbs.dreamstime.com/b/street-food-vegan-hot-dogs-cabbage-meatless-sausage-dark-wooden-background-top-view-239243266.jpg",  // Add actual image path
    price: 150,
    offerPrice: 120,
    rating: 5,
  },
  {
    id: 8,
    name: "Vegan Nachos",
    image: "https://th.bing.com/th/id/OIP.GHznpRsenWmDNZ4749ffiQHaJl?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 200,
    offerPrice: 175,
    rating: 4,
  },
  {
    id: 9,
    name: "Mommos",
    image:"https://th.bing.com/th/id/OIP.NMZPyppkqdHRKA-r8G75bAAAAA?rs=1&pid=ImgDetMain",
    price: 200,
    offerPrice: 150,
    rating: 5,
  },
  {
    id: 10,
    name: "Kulcha",
    image: "https://www.foodfusion.com/wp-content/uploads/2022/01/YT-grab-1.jpg?v=1641884797",  // Add actual image path
    price: 150,
    offerPrice: 120,
    rating: 4,
  },
  {
    id: 11,
    name: "Cheese Chilli",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/chilli-paneer-recipe.jpgs",  // Add actual image path
    price: 450,
    offerPrice: 350,
    rating: 5,
  },
  {
    id: 12,
    name: "Chaap",
    image: "https://b.zmtcdn.com/data/pictures/6/18736996/f79ca2c64b264f34e0c1e41dc15173cc_o2_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",  // Add actual image path
    price: 450,
    offerPrice: 400,
    rating: 4,
  },
];

function StreetFood() {
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
        className="street-food-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a vibrant street food theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        
        <h1 className="fw-bold"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Street Food</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Enjoy mouth-watering street food from around the world!</p>
      </div>

      {/* Street Food Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {streetFoodProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top street-food-image"
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

export default StreetFood;
