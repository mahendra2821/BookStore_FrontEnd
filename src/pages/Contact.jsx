import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Install this via `npm install emailjs-com`

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', issue: 'General Query' });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use EmailJS to send email
    emailjs
      .send(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        formData,
        'your_user_id' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          setFormSent(true);
          setTimeout(() => setFormSent(false), 5000); // Reset success message after 5 seconds
          setFormData({ name: '', email: '', message: '', issue: 'General Query' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Error sending message. Please try again later.');
        }
      );
  };

  return (
    <section className="relative bg-gradient-to-br bg-black text-white py-16 overflow-hidden">
      {/* Animated Chain Background */}
      <div className="absolute inset-0">
        <div className="animate-pulse chain-animation opacity-30"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>

        <div className="max-w-4xl mx-auto bg-black bg-opacity-70 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dropdown for Issues */}
            <div>
              <label htmlFor="issue" className="block text-sm font-medium mb-2">
                Select Issue
              </label>
              <select
                id="issue"
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                className="w-full bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
              >
                <option>General Query</option>
                <option>Support Request</option>
                <option>Feedback</option>
                <option>Billing Issue</option>
              </select>
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here"
                rows="5"
                className="w-full bg-gray-900 text-white p-3 rounded-lg focus:ring-2 focus:ring-white focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg--500 py-3 rounded-lg shadow-lg text-lg font-bold hover:bg-green-600 focus:ring-2 focus:ring-white transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Success Message */}
          {formSent && (
            <div className="mt-6 text-center text-green-400 font-semibold">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
        </div>
      </div>

      {/* Tailwind CSS for Chain Animation */}
      <style jsx>{`
        .chain-animation {
          background: url('https://www.transparenttextures.com/patterns/chain-link.png');
          background-size: 50px 50px;
          animation: move-bg 6s linear infinite;
        }

        @keyframes move-bg {
          from {
            background-position: 0 0;
          }
          to {
            background-position: 50px 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
