// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: 'What types of food do you offer?',
      answer: 'We offer a wide range of gifts including personalized items, home decor, gadgets, toys, and more!',
    },
    {
      question: 'How can I track my order?',
      answer: 'You can track your order by logging into your account and going to the "My Orders" section.',
    },
    {
      question: 'Do you offer food wrapping?',
      answer: 'Yes, we offer food wrapping options for most products during checkout.',
    },
    {
      question: 'Can I return a food?',
      answer: 'Yes, we have a 1 hour to  return policy for most items. Please check our return policy page for more details.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support via email at support@foovilla.com or call us at +91 9501842914.',
    },
  ];

  const toggleFAQ = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="container my-5" >
      <h1 className="text-center mb-4 title">Frequently <span className='text-danger'> Asked Questions</span></h1>
      <div className="list-group">
        {faqs.map((faq, index) => (
          <div key={index} className="list-group-item">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleFAQ(index)}
              style={{ cursor: 'pointer' }}
            >
              <h5>{faq.question}</h5>
              <span className="badge bg-secondary">{open === index ? '❤' : '💥'}</span>
            </div>
            {open === index && <div className="mt-3">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
