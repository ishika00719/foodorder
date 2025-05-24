
import React, { useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Import the action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Fastfood.css';

const FastFoodProducts = [
  {
    id: 1,
    name: "Cheeseburger",
    image: "https://wallpaperaccess.com/full/2004521.jpg",
    price: 250,
    offerPrice: 200,
    rating: 4,
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    image: "https://th.bing.com/th/id/OIP.C5VNu-rkCHZ_aQjHxn3NLwHaEo?rs=1&pid=ImgDetMain",
    price: 800,
    offerPrice: 650,
    rating: 5,
  },
  {
    id: 3,
    name: "French Fries",
    image: "https://th.bing.com/th/id/OIP.bU8UKGDLWglb18sFKd_JzQHaE8?w=540&h=360&rs=1&pid=ImgDetMain",
    price: 300,
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 4,
    name: "Chicken Nuggets",
    image: "https://th.bing.com/th/id/OIP.0UxTbl_gvgTfID9Mh8xQsAHaEo?rs=1&pid=ImgDetMain",
    price: 500,
    offerPrice: 400,
    rating: 5,
  },
  {
    id: 5,
    name: "Veggie Wrap",
    image: "https://th.bing.com/th/id/OIP.xumKCUTBkwRPUOtEcmOkswHaH6?rs=1&pid=ImgDetMain",
    price: 400,
    offerPrice: 300,
    rating: 3,
  },
  {
    id: 6,
    name: "Hot Dog",
    image: "https://th.bing.com/th/id/OIP.eKb1iwfwGkenHbM4fpmhkwHaE8?rs=1&pid=ImgDetMain",
    price: 200,
    offerPrice: 150,
    rating: 4,
  },
  {
    id: 7,
    name: "Onion Rings",
    image: "https://th.bing.com/th/id/OIP.Vu1SGNA-B7Tu0DfrhDqc2AHaE8?rs=1&pid=ImgDetMain",
    price: 300,
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 8,
    name: "Cheese Pizza",
    image: "https://th.bing.com/th/id/OIP.kOC4SVEtjR50s0-RBs5vWwHaFX?rs=1&pid=ImgDetMain",
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 9,
    name: "Chicken Burger",
    image: "https://assets.unileversolutions.com/recipes-v2/163110.jpg",
    price: 300,
    offerPrice: 200,
    rating: 4,
  },
  {
    id: 10,
    name: "Hamburger",
    image: "https://www.southernliving.com/thmb/KVDGbUjNQAscvYQkZ94cajAROj0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Hamburger_Patties_006-1-2000-fd07f0dfb01643fe84239032b4f4409b.jpeg",
    price: 300,
    offerPrice: 250,
    rating: 4,
  },
  {
    id: 11,
    name: "Mozzarella stick",
    image: "https://thefoodcafe.com/wp-content/uploads/2018/04/Mozzarella-Sticks-7-700x1050.jpg",
    price: 400,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 12,
    name: "Chicken Tenders",
    image: "https://www.scrumptiously.com/wp-content/uploads/2023/05/ChickenTenders.webp",
    price: 700,
    offerPrice: 550,
    rating: 4,
  },
  
  

];

function Fastfood() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
    toast.success(`${product.name} has been added to the Orders!`); // Show success toast
  };

  return (
    <div>
      {/* Banner Section */}
      <div
        className="fastfood-banner"
        style={{
          backgroundImage: "url('')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center', backgroundColor:'darkred',
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Delicious Fast Food</h1>
        <p style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Explore our mouthwatering fast food options for every craving.</p>
      </div>

      {/* Fast Food Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {FastFoodProducts.map((product) => (
            <div key={product.id} className="col" data-aos="fade-up">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top fastfood-image"
                  alt={product.name}
                  style={{ height: '250px', objectFit: 'contain' }}
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

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop />
    </div>
  );
}

export default Fastfood;
