import React from 'react';
import { FaUtensils, FaSeedling, FaSmile } from 'react-icons/fa'; // Importing icons from React Icons

function About() {
  return (
    <>
      <div>
        {/* About Us Section */}   
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="display-4 mb-4 fst-italic fs-1 fw-bold"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"24px" }}>About <span className='text-danger'>FoodVilla</span></h2>
                <p className="lead">
                  Welcome to <b>FoodVilla</b> – where taste meets tradition and every meal is a delightful experience. 
                  Nestled in the heart of Jalandhar, FoodVilla is more than just a restaurant; it's a celebration of flavors, hospitality, and passion for exceptional dining.
                </p>
                <p>
                  Established in <b>2018</b>, FoodVilla was founded with a vision to bring gourmet experiences to food lovers. 
                  Our expert chefs craft each dish using fresh, locally sourced ingredients, ensuring an authentic and memorable culinary journey.
                </p>
                <p>
                  At FoodVilla, we take pride in creating dishes that not only satisfy hunger but also bring joy and comfort. 
                  Our menu is designed to cater to all taste preferences, offering a variety of cuisines from traditional Indian flavors to contemporary fusion delights.
                </p>
                <p>
                  Whether you're dining with family, celebrating a special occasion, or simply indulging in your love for food, FoodVilla promises an ambiance and experience like no other. 
                  We are committed to serving meals that are not only delicious but also crafted with love and care.
                </p>
                <p>
                  Our commitment to sustainability and eco-friendly practices ensures that we create culinary magic while caring for the environment. 
                  With every dish we serve, we bring a piece of our heritage and culture to your plate, making each dining experience truly unique.
                </p>
              </div>
              <div className="col-lg-6">
                <img src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" alt="FoodVilla"style={{height:600, padding:50}} className="img-fluid rounded shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2 className="display-4 mb-4  fs-1 fst-italic fw-bold  " style={{ fontFamily: "'Dancing Script', cursive",  }}>Our <span className='text-danger'>Story</span></h2>
                <p className="lead">
                  What started as a small idea in 2018 has grown into a beloved dining destination. At FoodVilla, we believe in the power of flavors to bring people together. 
                  Our journey has been one of passion, dedication, and an unwavering commitment to quality. With every dish, we strive to create an experience that lingers in your memory.
                </p>
                <p>
                  Over the years, we have expanded our menu, upgraded our services, and continually reinvented our dishes to keep up with the evolving tastes of our guests. 
                  Our dedication to culinary excellence has earned us a loyal community of food enthusiasts who appreciate our attention to detail and unwavering quality.
                </p>
                <p>
                  From farm-fresh ingredients to exquisite presentation, we leave no stone unturned in delivering an unforgettable dining experience. 
                  We invite you to be a part of our story, savor our specialties, and create cherished memories with every meal at FoodVilla.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Dine With Us Section */}
        <section className="py-5">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-12">
                <h2 className="display-4 fs-1 fst-italic fw-bold mb-4" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"2px" }}>Why Dine <span className=' text-danger'>With Us?</span></h2>
                <p className="lead">We strive to offer the best dining experience for our guests. Here's what makes FoodVilla special:</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <FaUtensils className="card-img-top text-primary" size={100} />
                    <h5 className="card-title mt-3 fs-2 text-danger">Authentic Flavors</h5>
                    <p className="card-text">Our chefs bring authentic tastes from various cuisines, blending tradition with innovation.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <FaSeedling className="card-img-top text-success" size={100} />
                    <h5 className="card-title mt-3 text-danger fs-1">Fresh Ingredients</h5>
                    <p className="card-text">We use locally sourced, fresh, and organic ingredients to ensure the highest quality in every dish.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="card shadow">
                  <div className="card-body text-center">
                    <FaSmile className="card-img-top text-danger" size={100} />
                    <h5 className="card-title mt-3 fs-2 text-danger ">Warm Hospitality</h5>
                    <p className="card-text">At FoodVilla, you're not just a guest; you're family. We ensure a warm and welcoming experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
