import React from 'react';
import { Link } from 'react-router-dom';

function TermsConditions() {
  return (
    <div className="container py-5" >
      <h1 className="text-center mb-4 title fw-bold text-danger">Terms <span className='text-black'>and</span> Conditions</h1>

      <section className="mb-4">
        <h2 className='title fw-bold'>Introduction</h2>
        <p>
          These Terms and Conditions ("Terms") govern your use of our website and services. By accessing or using GiftStore ("the website," "we," "us," or "our"), you agree to comply with and be bound by these Terms. If you do not agree with these Terms, you must not use the website.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Use of the Website</h2>
        <p>
          By using FoodVilla, you agree to comply with all applicable local, state, and international laws and regulations. You must not use the website for any unlawful or unauthorized purpose.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Account Registration</h2>
        <p>
          To access certain features of the website, you may need to create an account. You agree to provide accurate and up-to-date information when registering and maintaining your account. You are responsible for keeping your account credentials confidential.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Intellectual Property</h2>
        <p>
          All content available on FoodVilla, including text, images, graphics, logos, and other materials, is owned by GiftStore or its content providers and is protected by copyright, trademark, and other intellectual property laws. You may not use, copy, or reproduce any content without the express written permission of GiftStore.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Product Information and Pricing</h2>
        <p>
          We strive to provide accurate and up-to-date information on our website regarding products, prices, and availability. However, errors may occur, and we reserve the right to correct any inaccuracies at any time without prior notice.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Payments and Transactions</h2>
        <p>
          All payments made on the website are processed securely. By making a purchase, you agree to pay the listed price for the product, including any applicable taxes, shipping fees, and other charges. GiftStore uses third-party payment processors and is not responsible for any issues related to payment processing.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Returns and Refunds</h2>
        <p>
          Please refer to our <Link to="/return-policy" className="text-reset">Return Policy</Link> for information regarding returns and refunds. By purchasing products from GiftStore, you agree to our return and refund policies.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, GiftStore is not liable for any direct, indirect, incidental, special, or consequential damages that result from the use or inability to use the website or products purchased through it.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold' >Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the website at any time, without notice, for any reason, including breach of these Terms and Conditions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Privacy Policy</h2>
        <p>
          Your use of the website is also governed by our <Link to="/privacy-policy" className="text-reset">Privacy Policy</Link>, which describes how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Changes to Terms and Conditions</h2>
        <p>
          We reserve the right to modify or update these Terms and Conditions at any time. Any changes will be posted on this page, and the "last revised" date will be updated. By continuing to use the website after such changes are posted, you agree to be bound by the updated Terms.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Governing Law</h2>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which GiftStore operates.
        </p>
      </section>

      <section className="mb-4">
        <h2 className='title fw-bold'>Contact Us</h2>
        <p>
          If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> <a href="mailto:support@foodvilla.com" className="text-reset">support@foodvilla.com</a>
        </p>
      </section>

      <div className="text-center">
        <Link to="/" className="btn btn-danger"style={{ fontFamily: "'Dancing Script', cursive", fontSize:"20px" }}>Back to Home</Link>
      </div>
    </div>
  );
}

export default TermsConditions;
