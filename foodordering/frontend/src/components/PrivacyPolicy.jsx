import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 title">Privacy <span className='text-danger'>Policy</span></h1>
      
      <section className="mb-4">
        <h2 className='title'>Introduction</h2>
        <p>
          At FoodVilla, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines the information we collect, how we use it, and how we safeguard it.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title'>Information We Collect</h2>
        <p>
          We may collect the following types of information when you use our website:
        </p>
        <ul>
          <li>Personal details such as name, email address, phone number, etc.</li>
          <li>Payment information when you make purchases.</li>
          <li>Browsing behavior, such as the pages you visit, the links you click, etc.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className='title'>How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>To process and complete your orders.</li>
          <li>To improve our services and website experience.</li>
          <li>To communicate with you about promotions, offers, and updates.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className='title'>Cookies Policy</h2>
        <p>
          We use cookies to enhance your experience on our website. Cookies are small files stored on your device that help us remember your preferences and personalize content. You can control the use of cookies through your browser settings.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title'>Data Security</h2>
        <p>
          We take appropriate security measures to protect your personal information from unauthorized access, alteration, or destruction. However, no method of transmission over the internet is completely secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title'>Your Rights</h2>
        <p>
          You have the right to:
        </p>
        <ul>
          <li>Access and update the personal information we hold about you.</li>
          <li>Request the deletion of your personal information, subject to certain exceptions.</li>
          <li>Opt-out of marketing communications at any time.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className='title'>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "last revised" date.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title'>Contact Us</h2>
      
        <p>
          If you have any questions or concerns about this Privacy Policy or how we handle your personal information, feel free to contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@foodvilla.com">support@foodvilla.com</a>
        </p>
      </section>

      <div className="text-center">
        <Link to="/" className="btn btn-danger" style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
