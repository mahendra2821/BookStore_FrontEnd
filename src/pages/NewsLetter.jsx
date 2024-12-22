import React, { useState } from 'react';
import './NewsLetter.css'; // Custom CSS file for styles

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // Use a mailto: link to send the email (simulated behavior)
      window.location.href = `mailto:jammulamahendra28210702@gmail.com?subject=Newsletter Subscription&body=Subscriber Email: ${email}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section className="newsletter-section py-16 bg-black">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6 font-serif ">
          Stay Updated!
        </h2>
        <p className="text-xl text-white mb-6 font-serif">
          Subscribe to our newsletter for the latest book releases, discounts, and special offers.
        </p>

        {/* Newsletter Signup Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="signup-form bg-gray-900 p-8 rounded-lg shadow-lg relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input w-full p-4 mb-4 text-lg rounded-[30px] focus:outline-none focus:ring-2 focus:ring-black-400 text-white bg-black border border-BLACK-700"
            />

            <button     
              type="submit"
              className="font-serif submit-btn w-full p-4 text-lg font-bold font-serif text-white-900 rounded-lg shadow-lg  hover:scale-105 duration-300"
            >
              Subscribe Now
            </button>

          </form>
        ) : (
          <div className="thank-you-message">
            <p className="text-white text-2xl">Thank you for subscribing!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsLetter;
