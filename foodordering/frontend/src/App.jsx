import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing routing components
import React, { useState } from 'react'; // Importing useState
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Fastfood from './components/fastfood';
import ProfilePage from './components/ProfilePage';
import Chinese from './components/Chinese';
import IndianCuisine from './components/IndianCuisine';
import ItalianCuisine from './components/ItalianCuisine';
import MexicanCuisine from './components/MexicanCuisine';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ClientReviewPage from './components/ClientReviewPage';
import JapanesCuisine from './components/JapaneseCuisine';
import HealthyFood from './components/HealthyFood';
import Desserts from './components/Desserts';
import Beverages from './components/Beverages';
import Seafood from './components/Seafood';
import BBQAndGrill from './components/BBQAndGrill';
import VegetarianAndVegan from './components/VegetarianAndVegan';
import Breakfast from './components/Breakfast';
import StreetFood from './components/StreetFood';
import Checkout from './components/Checkout';
import ThankYou from './components/ThankYou';
import AdminDashboard from './components/AdminDashboard';
import PrivacyPolicy from './components/PrivacyPolicy';
 import TermsConditions from './components/TermsConditions';
import FAQ from './components/FAQ'
import OurTeam from './components/OurTeam';
import ServicesPage from './components/Services';
import ErrorPage from './components/ErrorPage';
import Teacoffeepage from './components/Teacoffeepage';
import Cartpage from './components/Cartpage';
import Cart from './components/Cartpage';


function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      {/* Pass searchQuery and handleSearch to Navbar */}
      <Navbar onSearch={handleSearch} searchQuery={searchQuery} />

      {/* Define the routes here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page route */}
        <Route path="/category" element={<Category searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fastfood" element={<Fastfood/>} />
        <Route path="/cart" element={< Cart/>} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chinese" element={<Chinese />} />
        <Route path="/indiancuisine" element={<IndianCuisine />} />
        <Route path="/italiancuisine" element={<ItalianCuisine />} />
        <Route path="/mexicancuisine" element={<MexicanCuisine />} />
        <Route path="/desserts" element={<Desserts />} />  
        <Route path="/beverages" element={<Beverages />} /> 
        <Route path="/seafood" element={<Seafood />} /> 
        <Route path="/bbqandgrill" element={<BBQAndGrill />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vegetarianandvegan" element={<VegetarianAndVegan />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/streetFood" element={<StreetFood />} />
        <Route path="/Teacoffeepage" element={<Teacoffeepage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/review" element={<ClientReviewPage />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/japanesecuisine" element={<JapanesCuisine />} />
        <Route path="/healthyfood" element={<HealthyFood />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/team" element={<OurTeam />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/Loginpage" element={<LoginPage/>} /> 
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/admin" element={<AdminDashboard/>} />
      </Routes>

      {/* Footer will appear on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
