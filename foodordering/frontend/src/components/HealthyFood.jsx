import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Healthy food category
const healthyFoodProducts = [
  {
    id: 1,
    name: "Quinoa Salad",
    image: "https://cdn.loveandlemons.com/wp-content/uploads/2020/08/quinoa-salad.jpg",
    price: 300,
    offerPrice: 200,
    rating: 5,
  },
  {
    id: 2,
    name: "Avocado Toast",
    image: "https://www.jessicagavin.com/wp-content/uploads/2020/07/avocado-toast-9.jpg",
    price: 800,
    offerPrice: 500,
    rating: 4,
  },
  {
    id: 3,
    name: "Kale Smoothie",
    image: "https://www.cottercrunch.com/wp-content/uploads/2021/03/super-fruit-berry-kale-smoothies-5-scaled.jpg",
    price: 300,
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 4,
    name: "Chia Pudding",
    image: "https://www.wellplated.com/wp-content/uploads/2020/04/Coconut-Chia-Pudding-Best-Recipe.jpg",
    price: 600,
    offerPrice: 500,
    rating: 4,
  },
  {
    id: 5,
    name: "Hummus with Veggies",
    image: "https://townsquare.media/site/959/files/2020/04/Screen-Shot-2020-04-16-at-3.25.17-PM.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89",
    price: 800,
    offerPrice: 750,
    rating: 5,
  },
  {
    id: 6,
    name: "Acai Bowl",
    image: "https://joyfoodsunshine.com/wp-content/uploads/2021/02/homemade-acai-bowl-recipe-6.jpg",
    price: 750,
    offerPrice: 600,
    rating: 5,
  },
  {
    id: 7,
    name: "Greek Yogurt with Honey",
    image: "https://recipe-garden.com/wp-content/uploads/2021/09/honeyvanillagreekyogurt3-1152x1536.jpg",
    price: 600,
    offerPrice: 500,
    rating: 3,
  },
  {
    id: 8,
    name: "Spinach & Feta Wrap",
    image: "https://laurenfitfoodie.com/wp-content/uploads/2023/02/Spinachfetawrap-23.jpg",
    price: 500,
    offerPrice: 400,
    rating: 4,
  },
  {
    id: 9,
    name: "Lentil Soup",
    image: "https://cookieandkate.com/images/2015/02/vegan-lentil-soup-recipe-3x.jpg",
    price: 500,
    offerPrice: 400,
    rating: 4,
  },
  {
    id: 10,
    name: "Oatmeal with Berries",
    image: "https://www.wellplated.com/wp-content/uploads/2019/12/Healthy-Oatmeal-Recipe-with-Berries-and-Nuts.jpg",
    price: 450,
    offerPrice: 350,
    rating: 5,
  },
  {
    id: 11,
    name: "Stuffed Bell Peppers",
    image: "https://www.wellplated.com/wp-content/uploads/2020/08/Healthy-Stuffed-Peppers.jpg",
    price: 550,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 12,
    name: "Mango Chia Smoothie",
    image: "https://simplegreensmoothies.com/wp-content/uploads/2022/02/mango-smoothie-recipe.jpg",
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
];


function HealthyFood() {
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
        className="healthy-food-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a healthy, fresh theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Healthy Food</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Enjoy nutritious and delicious meals that fuel your body with goodness.</p>
      </div>

      {/* Healthy Food Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {healthyFoodProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top healthy-food-image"
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

export default HealthyFood;
