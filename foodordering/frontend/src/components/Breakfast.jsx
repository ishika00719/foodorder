import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Breakfast category
const breakfastProducts = [
  {
    id: 1,
    name: "Pancakes with Syrup",
    image: "https://www.theconsciousplantkitchen.com/wp-content/uploads/2022/08/Vegan-Oatmeal-Pancakes-7.jpg",  // Replace with actual image paths
    price: 8.00,
    offerPrice: 7.00,
    rating: 5,
  },
  {
    id: 2,
    name: "Scrambled Eggs",
    image: "https://th.bing.com/th/id/OIP.iKdJhU6wxDu7MkUYrXPujgHaLM?rs=1&pid=ImgDetMain",
    price: 6.00,
    offerPrice: 5.50,
    rating: 4,
  },
  {
    id: 3,
    name: "Bacon and Eggs",
    image: "https://th.bing.com/th/id/OIP.kDB7lfLgE9UaTswarLWtzQHaFk?rs=1&pid=ImgDetMain",
    price: 10.00,
    offerPrice: 9.00,
    rating: 5,
  },
  {
    id: 4,
    name: "French Toast",
    image: "https://th.bing.com/th/id/OIP.mhQArgNz-nyA7ptZuDYacQHaJQ?rs=1&pid=ImgDetMain",
    price: 7.50,
    offerPrice: 6.50,
    rating: 4,
  },
  {
    id: 5,
    name: "Avocado Toast",
    image: "https://th.bing.com/th/id/OIP.VtM3gngMDB2pcktdmWIVeQHaE8?rs=1&pid=ImgDetMain",
    price: 9.00,
    offerPrice: 8.00,
    rating: 5,
  },
  {
    id: 6,
    name: "Omelette",
    image: "https://th.bing.com/th/id/OIP.RX027L4OUPD1cR8967uNJgHaLc?rs=1&pid=ImgDetMain",
    price: 8.50,
    offerPrice: 7.50,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Bagels with Cream Cheese",
    image: "https://www.therawchef.com/content/images/size/w2000/2023/10/raw-vegan-bagels-thumbnail.jpg",  // Add actual image path
    price: 5.00,
    offerPrice: 4.50,
    rating: 5,
  },
  {
    id: 8,
    name: "Breakfast Burrito",
    image: "https://www.contentednesscooking.com/wp-content/uploads/2019/01/Vegan-Breakfast-Burrito-with-Tofu-Scramble-9.jpg",  // Add actual image path
    price: 9.50,
    offerPrice: 8.00,
    rating: 4,
  },
  {
    id: 9,
    name: "Waffles with Fruit",
    image: "https://thumbs.dreamstime.com/b/sweet-savory-vegan-waffles-topped-fresh-fruit-maple-syrup-whipped-cream-created-generative-ai-274292230.jpg",  // Add actual image path
    price: 8.00,
    offerPrice: 7.00,
    rating: 5,
  },
  {
    id: 10,
    name: "Smoothie Bowl",
    image: "https://th.bing.com/th/id/OIP.DWjUkM7QjRYIWHkhx2FaegHaJt?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 6.00,
    offerPrice: 5.50,
    rating: 4,
  },
  {
    id: 11,
    name: "Granola and Yogurt",
    image: "https://th.bing.com/th/id/OIP.55ZqudorDEwmaSksGI5w0AAAAA?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 7.50,
    offerPrice: 6.50,
    rating: 5,
  },
  {
    id: 12,
    name: "Fruit Salad",
    image: "https://th.bing.com/th/id/OIP.SmUDAS2BtdH9O_OwXEWheAHaH0?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 5.50,
    offerPrice: 5.00,
    rating: 4,
  },
];

function Breakfast() {
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
        className="breakfast-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a warm breakfast theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold "style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Breakfast</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Start your day right with a delicious breakfast!</p>
      </div>

      {/* Breakfast Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {breakfastProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top breakfast-image"
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

export default Breakfast;
