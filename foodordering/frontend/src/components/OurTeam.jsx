
// src/components/OurTeam.js

import React from 'react';
import Slider from 'react-slick'; // Import react-slick for carousel functionality
import { FaLinkedin, FaGithub,FaFacebook } from 'react-icons/fa'; // Import social icons
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 

function OurTeam() {
  const teamMembers = [
    {
      id: 1,
      name: 'Aryan',
      role: 'Executive Chef',
      image: 'https://www.ultimatebeaver.com/wp-content/uploads/bb-plugin/cache/photo-gallery-img-02-circle.jpg',
      linkedin: '#',
      foodvilla: '#'
    },
    {
      id: 2,
      name: 'Samreeti',
      role: 'Sous Chef',
      image: 'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?cs=srgb&dl=pexels-edmond-dantes-4342352.jpg&fm=jpg',
      linkedin: '#',
      foodvilla: '#'
    },
    {
      id: 3,
      name: 'Anushka',
      role: 'Pastry Chef',
      image: 'https://images.pexels.com/photos/4347368/pexels-photo-4347368.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      linkedin: '#',
      foodvilla: '#'
    },
    {
      id: 4,
      name: 'Vishal',
      role: 'Fish Chef',
      image: 'https://www.shutterstock.com/image-photo/happy-businessman-smiling-sitting-desk-260nw-1640963563.jpg',
      linkedin: '#',
      foodvilla: '#'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,               // Enable autoplay
    autoplaySpeed: 1000,          // Set autoplay speed (3 seconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,           // Pause on hover
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="container my-5" >
      <h1 className="text-center mb-5 title fs-2 fst-italic fw-bold">Meet <span className='text-danger'>Our Team</span> </h1>
      <Slider {...settings}>
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member-card p-3">
            <div className="card shadow">
              <img
                src={member.image}
                alt={member.name}
                className="card-img-top mt-4"
                style={{ borderRadius: '50%', width: '150px', height: '150px', margin: '0 auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.role}</p>
                <div className="social-icons">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-danger btn-sm m-1"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm m-1"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={member.Facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-sm m-1"
                  >
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurTeam;
