import React from 'react';
import Slider from 'react-slick'; // Import React Slick

// Import Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    infinite: true,    // Enables continuous loop mode
    speed: 500,        // Transition speed in ms
    slidesToShow: 1,   // How many slides to show at once
    slidesToScroll: 1, // How many slides to scroll at once
    autoplay: true,    // Enable autoplay
    autoplaySpeed: 1000, // Autoplay delay in ms
    dots: true,        // Enable dots navigation
    arrows: true,      // Enable next/prev arrows
  };

  return (
    <div>
      {/* React Slick Carousel */}
      <Slider {...settings}>
        <div>
          <img src="https://images2.alphacoders.com/969/thumb-1920-969786.jpg" className="d-block w-100 banner " alt="Best Foods for You" style={{ height: 700 }} />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/750073/pexels-photo-750073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 banner" alt="Eat Good Stay Good" style={{ height: 700 }} />
        </div>
        <div>
          <img src="https://www.healthifyme.com/blog/wp-content/uploads/2021/11/Is-it-better-to-be-on-a-vegetarian-diet.jpg" className="d-block w-100 banner" alt="food" style={{ height: 700 }} />
        </div>
        <div>
          <img src="https://images.pexels.com/photos/30373423/pexels-photo-30373423/free-photo-of-delicious-homemade-italian-pasta-dish.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="d-block w-100 banner" alt="Enjoy Our Food" style={{ height: 700 }} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
