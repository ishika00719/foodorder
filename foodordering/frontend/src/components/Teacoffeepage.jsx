
import React, { useEffect } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions'; // Import the action
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeacoffeeProducts= [
    {
        id: 1,
        name: "Masala Chai",
        image: "https://www.seema.com/wp-content/uploads/2022/07/Masala-Chai.jpg",
        price: 150,
        offerPrice: 120,
        rating: 5,
      },
      {
        id: 2,
        name: "Green Tea",
        image: "https://th.bing.com/th/id/OIP._gmmcH4Fjay_hZ6RlsF3XAHaEK?rs=1&pid=ImgDetMain",
        price: 200,
        offerPrice: 170,
        rating: 4,
      },
      {
        id: 3,
        name: "Filter Coffee",
        image: "https://img.freepik.com/premium-photo/south-indian-filter-coffee-served-traditional-brass-stainless-steel-cup_466689-90121.jpg?w=2000",
        price: 250,
        offerPrice: 220,
        rating: 5,
      },
      {
        id: 4,
        name: "Black Coffee",
        image: "https://img.freepik.com/premium-photo/black-coffee-beans-old-background_200402-4330.jpg",
        price: 180,
        offerPrice: 150,
        rating: 4,
      },
      {
        id: 5,
        name: "Kulhad Chai",
        image: "https://cdn.shopify.com/s/files/1/2793/2598/articles/Untitled_design_162.png?v=1632134605",
        price: 220,
        offerPrice: 190,
        rating: 4,
      },
      {
        id: 6,
        name: "Espresso",
        image: "https://wallpaperaccess.com/full/2307942.jpg",
        price: 300,
        offerPrice: 270,
        rating: 5,
      },
      {
        id: 7,
        name: "Cappuccino",
        image: "https://th.bing.com/th/id/OIP.dmab2A5jllmVTttBF6aJ1QHaE6?rs=1&pid=ImgDetMain",
        price: 350,
        offerPrice: 320,
        rating: 5,
      },
      {
        id: 8,
        name: "Latte",
        image: "https://wallpaperbat.com/img/232731-coffee-latte-art-hd-wallpaper.jpg",
        price: 340,
        offerPrice: 310,
        rating: 5,
      },
      {
        id: 9,
        name: "Iced Coffee",
        image: "https://coffeeabout.com/wp-content/uploads/2023/05/Chocolate-syrups-to-iced-coffee.jpg",
        price: 280,
        offerPrice: 250,
        rating: 4,
      },
      {
        id: 10,
        name: "Oolong Tea",
        image: "https://worldteadirectory.com/wp-content/uploads/2018/09/oolong-tea.jpg",
        price: 260,
        offerPrice: 230,
        rating: 4,
      },
      {
        id: 11,
        name: "Matcha Tea",
        image: "https://allwaysdelicious.com/wp-content/uploads/2023/01/matcha-milk-tea-2.jpg",
        price: 400,
        offerPrice: 370,
        rating: 5,
      },
      {
        id: 12,
        name: "Turmeric Latte",
        image: "https://www.thespruceeats.com/thmb/J1R-XAEC0MFnvbwJCC-YGS9xkog=/4000x2667/filters:no_upscale():max_bytes(150000):strip_icc()/turmeric-tea-recipe-3376435-084-69d21586ee0f4a94b6ab44cf32ad4acf.jpg",
        price: 320,
        offerPrice: 290,
        rating: 5,
      }
    ];

function Teacoffeepage() {
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
        className="Teacoffee-banner"
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
       <h1 className="fw-bold" style={{ fontFamily: "'Dancing Script', cursive", fontSize: "50px" }}>Tea & Coffee</h1>
       <p style={{ fontFamily: "'Dancing Script', cursive", fontSize: "24px" }}>Savor the finest selection of teas and coffees.</p>
      </div>

      {/* teacoffee Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
          {TeacoffeeProducts.map((product) => (
            <div key={product.id} className="col" data-aos="fade-up">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top teacoffee-image"
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
                  <button className="btn btn-danger" onClick={() => handleAddToCart(product)}>
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

export default Teacoffeepage;
