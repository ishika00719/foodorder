import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  // Importing toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toastify

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      // Save the contact details in localStorage
      const contactDetails = { name, email, message, date: new Date().toISOString() };
      let storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
      storedContacts.push(contactDetails);
      localStorage.setItem('contacts', JSON.stringify(storedContacts));

      // Display Success Toast
      toast.success('Message sent successfully! We\'ll get back to you soon.');

      // Clear form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Display Error Toast
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="container foodvilla-contact-container my-5">
      <div className="row">
        {/* Contact Form Section */}
        <div className="col-md-6">
          <h1 className="title"><i className="fas fa-utensils"></i> Contact Us <span className='text-danger'>at FoodVilla</span> </h1>
          <p>Got a question about our menu, delivery options, or catering services? We’d love to hear from you! Fill out the form below, and our team will get back to you shortly.</p>
          
          <ul className="list-unstyled">
            <li><i className="fas fa-phone"></i> <strong>Phone:</strong> +1 (234) 567-890</li>
            <li><i className="fas fa-envelope"></i> <strong>Email:</strong> contact@foodvilla.com</li>
            <li><i className="fas fa-map-marker-alt"></i> <strong>Address:</strong> 123 Food Street, Jalandhar City, Country</li>
          </ul>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows={4}
                placeholder="Tell us your feedback, questions, or catering inquiries!"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-submit btn-danger mt-3">Send Message</button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="col-md-6">
          <h1 className="title"><i className="fas fa-phone-alt"></i> FoodVilla <span className='text-danger'>Contact Details</span></h1>
          <p>Looking to place a large order or inquire about special events? Contact us directly using the details below:</p>

          {/* Google Map Embed */}
          <div className="mt-4">
            <h5><i className="fas fa-map-marker-alt"></i> Our FoodVilla <span className='text-danger'>Location</span></h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4980373101544!2d75.58323947524399!3d31.345233074294605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5bacba6b9c53%3A0x74322ac3023b27d!2sFood%20villa!5e0!3m2!1sen!2sin!4v1744186857910!5m2!1sen!2sin"
              width="600"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Toast Container to display toast messages */}
      <ToastContainer />
    </div>
  );
}

export default Contact;
