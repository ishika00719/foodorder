import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Chinese Food category
const ChineseProducts = [
  {
    id: 1,
    name: "Sweet and Sour Pork",
    image: "https://therecipecritic.com/wp-content/uploads/2021/04/sweetandsourpork2.jpg",
    price: 450,  // Original price
    offerPrice: 400, // Offer price
    rating: 4,  // Rating out of 5
  },
  {
    id: 2,
    name: "Kung Pao Chicken",
    image: "https://th.bing.com/th/id/OIP.4AQVVkVA_OTJfzGb7qmkswHaLH?rs=1&pid=ImgDetMain",
    price: 600,
    offerPrice: 550,
    rating: 5,
  },
  {
    id: 3,
    name: "Mapo Tofu",
    image: "https://th.bing.com/th/id/OIP.DXVXuFGUcZriHBt_0bfNswHaHa?rs=1&pid=ImgDetMain",
    price: 349,
    offerPrice: 320,
    rating: 3,
  },
  {
    id: 4,
    name: "Peking Duck",
    image: "https://nationaltoday.com/wp-content/uploads/2021/11/National-Peking-Duck-Day.jpg",
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 5,
    name: "Dim Sum",
    image: "https://hartleysevents.co.uk/wp-content/uploads/2018/04/shutterstock_135444434.jpg",
    price: 500,
    offerPrice: 450,
    rating: 5,
  },
  {
    id: 6,
    name: "Spring Rolls",
    image: "https://ik.imagekit.io/atlastravel/tfc/wp-content/uploads/2009/09/GettyImages-486940812.jpg",
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 7,
    name: "Hot and Sour Soup",
    image: "https://th.bing.com/th/id/OIP.3kg3WnzKUTycRA5FJ0dH4gHaE8?rs=1&pid=ImgDetMain",
    price: 450,
    offerPrice: 300,
    rating: 3,
  },
  {
    id: 8,
    name: "Chow Mein",
    image: "https://th.bing.com/th/id/OIP.1jjpKzGkH_SH-yjwhVETVAHaIX?rs=1&pid=ImgDetMain",
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 9,
    name: "Fried Rice",
    image: "https://www.kitchensanctuary.com/wp-content/uploads/2020/04/Chicken-Fried-Rice-square-FS-.jpg",
    price: 400,
    offerPrice: 370,
    rating: 5,
  },
  {
    id: 10,
    name: "Wonton Soup",
    image: "https://carlsbadcravings.com/wp-content/uploads/2018/11/wonton-soup-11.jpg",
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 11,
    name: "Chinese Dumplings",
    image: "https://tasteasianfood.com/wp-content/uploads/2021/01/Chinese-dumplings-featured-image.jpeg",
    price: 300,
    offerPrice: 280,
    rating: 5,
  },
  {
    id: 12,
    name: "Egg Fried Noodles",
    image: "https://th.bing.com/th/id/R.20aa0ba97530f80654e4653d01381d55?rik=XHxhw3eXc6Rp3Q&riu=http%3a%2f%2fwww.errenskitchen.com%2fwp-content%2fuploads%2f2016%2f03%2fFried-egg-noodles4.jpg&ehk=HGnNpppip%2fHl7ZjE1EsJnb8tfo5jzykJTVVTNXwQsYw%3d&risl=&pid=ImgRaw&r=0",
    price: 550,
    offerPrice: 500,
    rating: 4,
  },
];

function Chinese() {
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
        className="chinese-banner"
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
        <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Chinese Cuisine</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Experience the taste of authentic Chinese dishes.</p>
      </div>

      {/* Chinese Food Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {ChineseProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top foodimage"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  {/* Displaying the price with offer price and original price */}
                  <h5 className="card-text">
                    <span style={{ textDecoration: 'line-through', color: '#888' }}>
                    Rs.{product.price}
                    </span>
                    <span className="text-success mx-2">
                      <strong>{Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF</strong>
                    </span>
                    Rs.{product.offerPrice} {/* Offer price displayed */}
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

export default Chinese;
