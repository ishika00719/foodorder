import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Import star icons
import { useDispatch } from 'react-redux'; // Import useDispatch to dispatch actions
import { addToCart } from '../redux/actions/cartActions'; // Import the addToCart action
import { ToastContainer, toast } from 'react-toastify'; // Import toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import toastify CSS

// Example products for the Mexican cuisine category
const mexicanCuisineProducts = [
  {
    id: 1,
    name: "Tacos",
    image: "https://th.bing.com/th/id/R.f5ba8e5ae46ae50c0cf6c583a5fab9f3?rik=HM4MCJImoxIzew&riu=http%3a%2f%2fwww.pilotandofogao.com.br%2fwp-content%2fuploads%2f2016%2f03%2fTacos-mexicanos.jpg&ehk=z0ubv6gQaKf%2fn4oDlUksymfWewxT78vXetRgfAQpsRU%3d&risl=&pid=ImgRaw&r=0",  // Replace with your actual image paths
    price: 800,
    offerPrice: 650,
    rating: 5,
  },
  {
    id: 2,
    name: "Burrito",
    image: "https://cdn.tasteatlas.com/images/dishes/f4291f3e82f84c33a5997f801e8fb24f.jpg?mw=1300",
    price: 900,
    offerPrice: 750,
    rating: 4,
  },
  {
    id: 3,
    name: "Quesadilla",
    image: "https://th.bing.com/th/id/OIP.unGuBrX9w0FeGLZg2iS8xAHaHj?rs=1&pid=ImgDetMain",
    price: 700,
    offerPrice: 550,
    rating: 4,
  },
  {
    id: 4,
    name: "Churros",
    image: "https://wanderzestblog.com/wp-content/uploads/2020/04/Churros-3.jpg",
    price: 500,
    offerPrice: 450,
    rating: 4,
  },
  {
    id: 5,
    name: "Guacamole",
    image: "https://minimalistbaker.com/wp-content/uploads/2016/01/10-minute-CRAZY-delicious-Greek-inspired-GUACAMOLE-with-sun-dried-and-fresh-tomato-red-onion-lemon-juice-and-oregano-A-healthy-nutritious-snack-vegan-plantbased-glutenfree-guacamole-recipe.jpg",
    price: 600,
    offerPrice: 500,
    rating: 5,
  },
  {
    id: 6,
    name: "Nachos",
    image: "https://cdn.shopify.com/s/files/1/3008/1030/articles/nachos_-_everything_but_the_tacos_recipe_gustus_vitae_seasoning_spices_1100x.jpg?v=1673900360",
    price: 650,
    offerPrice: 550,
    rating: 4,
  },
  // New Products Added
  {
    id: 7,
    name: "Elote",
    image: "https://th.bing.com/th/id/OIP.DHtu_eqM2u_XBUnNw2ubPQAAAA?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 450,
    offerPrice: 350,
    rating: 4,
  },
  {
    id: 8,
    name: "Tamales",
    image: "https://th.bing.com/th/id/OIP.e8Cl3ckBH6w0hBtu76Z5KgHaE7?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 1000,
    offerPrice: 800,
    rating: 5,
  },
  {
    id: 9,
    name: "Fajitas",
    image: "https://www.foodiecrush.com/wp-content/uploads/2020/06/Chicken-Fajitas-foodiecrush.com-008.jpg",  // Add actual image path
    price: 800,
    offerPrice: 700,
    rating: 4,
  },
  {
    id: 10,
    name: "Mexican Corn Soup",
    image: "https://th.bing.com/th/id/OIP.fu_mtykk3cjmNptx5COoqgHaLH?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 750,
    offerPrice: 600,
    rating: 3,
  },
  {
    id: 11,
    name: "Margarita",
    image: "https://th.bing.com/th/id/OIP.eQiVP-nzRNwcaV9PHJtWLgAAAA?rs=1&pid=ImgDetMain",  // Add actual image path
    price: 500,
    offerPrice: 450,
    rating: 5,
  },
  {
    id: 12,
    name: "Tostadas",
    image: "https://eatthegains.com/wp-content/uploads/2023/05/Beef-Tostadas-9.jpg",  // Add actual image path
    price: 600,
    offerPrice: 500,
    rating: 4,
  },
];

function MexicanCuisine() {
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
        className="mexican-cuisine-banner"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          padding: '50px 0',
          textAlign: 'center',
          backgroundColor: 'darkred',  // Adjusted for a Mexican theme
        }}
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="700"
      >
        <h1 className="fw-bold"  style={{ fontFamily: "'Dancing Script', cursive", fontSize:"50px" }}>Mexican Cuisine</h1>
        <p  style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>Delight in the vibrant and bold flavors of Mexican food.</p>
      </div>

      {/* Mexican Cuisine Products Grid */}
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {mexicanCuisineProducts.map((product) => (
            <div key={product.id} className="col">
              <div className="card shadow-sm border-light">
                <img
                  src={product.image}
                  className="card-img-top mexican-cuisine-image"
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

export default MexicanCuisine;
