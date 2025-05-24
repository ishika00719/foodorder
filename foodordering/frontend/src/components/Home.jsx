import React from 'react';
import Carousel from './Carousel';
import Category from './Category';
import Contact from './Contact';
import About from './About';
import ClientReviewPage from './ClientReviewPage';
import Homecontent from './Homecontent';

import OurTeam from './OurTeam';
import ServicesPage from './Services';

function Home() {
  return (
    <>
      <Carousel />
      <Category />
      <Homecontent />
      <ServicesPage />
    
      <About />
      <ClientReviewPage />
      <OurTeam />
      <Contact />
    </>
  );
}

export default Home;
