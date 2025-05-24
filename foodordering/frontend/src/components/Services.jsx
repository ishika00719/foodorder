import React, { useEffect } from 'react';
import {FaRegCreditCard,FaHeadset,FaHandshake,FaHome ,FaTruck,FaGift, FaBirthdayCake, FaRing, FaBoxOpen } from 'react-icons/fa'; // Importing appropriate icons
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

// Array of service objects
const services = [
  
    {
      id: 1,
      icon: <FaTruck size={60} color="Red" />,
      name: "Free Delivery",
      description: "Get your Delicious Food delivered fresh and on time, right at your doorstep.",
    },
    {
      id: 2,
      icon: <FaRegCreditCard size={60} color="blue" />,
      name: "Easy Online Payment",
      description: "Pay easily through secure online payment options for your convenience.",
    },
    {
      id: 3,
      icon: <FaHeadset size={60} color="#f39c12" />,
      name: "24/7 Customer Support",
      description: "Our support team is available 24/7 to help you with your orders or inquiries.",
    },
    {
      id: 4,
      icon: <FaHandshake size={60} color="cyan" />,
      name: "Custom Cakes",
      description: "We specialize in creating custom cakes tailored to your special occasion.",
    },
    {
      id: 5,
      icon: <FaHome size={60} color="grey" />,
      name: "Home Delivery",
      description: "Order cakes and have them delivered right to your doorstep, fresh and delicious.",
    },
    {
      id: 6,
      icon: <FaHome size={60} color="crimson" />,
      name: "Reasonable charges",
      description: "Order yor meal and have them delivered right to your doorstep, fresh and delicious.",
    },
  
  {
    id: 7,
    name: 'Birthday party',
    icon: <FaGift size={60}  className="text-green mb-3" />, // Used FaGift for birthday party
    description: 'Enjoy your birthday with your loved ones with our delicious food',
  },
  {
    id: 8,
    name: 'Aniversary Party',
    icon: <FaBirthdayCake size={60} className="text-brown mb-3" />,
    description: 'Make your day memorable by having our food.',
  },
  {
    id: 9,
    name: 'Cocktail Party',
    icon: <FaGift size={60} className="text-red mb-3" />,
    description: 'Forget your worries by having our cocktails...',
  },
  {
    id: 10,
    name: 'Wedding Party',
    icon: <FaRing size={60} className="text-orange mb-3" />, // Added a Ring icon to represent wedding gifts
    description: 'Unique and meaningful wedding parties to help make your special day even more memorable.',
  },
  {
    id: 11,
    name: 'Reception Party',
    icon: <FaGift size={60} className="text-blue mb-3" />,
    description: 'We provide best memorable moments for the reception parties',
  },
  {
    id: 12,
    name: 'Dinner Party',
    icon: <FaBirthdayCake size={60} className="text-pink mb-3" />,
    description: 'Enjoy your candle night dinner with your partner .',
  },
];

function ServicesPage() {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 600, // Duration of the animation
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="container my-5" >
      {/* Page Title */}
      <h1 className="text-center mb-5 title fw-bold">Our <span className='text-danger'>Services</span></h1>

      {/* Service Cards */}
      <div className="row row-cols-1 row-cols-md-3 services-grid mx-5">
  {services.map((service) => (
    <div 
      key={service.id} 
      className="col" 
      data-aos="fade-up" // Adding AOS animation for each card
    >
      <div className="card servicecard mt-5">
        <div className="card-body text-center">
          {service.icon}
          <h5 className="card-title">{service.name}</h5>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

export default ServicesPage;
