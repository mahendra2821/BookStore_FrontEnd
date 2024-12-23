import React from 'react';

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <section className="relative bg-gradient-to-br bg-black text-white py-16 overflow-hidden animate-gradient">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-50 pointer-events-none"></div>
      
      {/* Title in the center */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          About Us
        </h2>
      </div>

      {/* Main Container */}
      <div className="container mx-auto px-4">
        {/* Main Content on the Left */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-left">
            <p className="text-lg leading-relaxed">
              Welcome to <span className="font-semibold text-gray-200">Bookstore</span>, where stories come alive. 
              Whether you're a bibliophile or just beginning your reading journey, 
              we aim to be your go-to destination for books that inspire, entertain, and educate.
            </p>
          </div>
          <div className="hidden md:block animate-slide-right">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg hover:shadow-xl transform transition duration-300"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="mt-12 mb-12 p-6 bg-black bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-center underline">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To bring books closer to everyone, empowering people through stories, knowledge, and culture. 
            We aspire to make every reader feel valued, connected, and inspired to explore the limitless world of books.
          </p>
        </div>

        {/* Vision */}
        <div className="mt-12 mb-12 p-6 bg-black bg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4 text-center underline">Our Vision</h3>
          <p className="text-lg leading-relaxed">
            We envision a global community where the love for reading thrives. Our goal is to create 
            a sustainable and engaging platform where book enthusiasts from all walks of life can discover their next great read.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mt-12 mb-12 p-6 bg-blackbg-opacity-75 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-6 text-center underline">What We Offer</h3>
          <ul className="list-none space-y-4 text-lg">
            <li className="flex items-start gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-500 inline-block"></span>
              A wide range of books for every genre and interest.
            </li>
            <li className="flex items-start gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-500 inline-block"></span>
              Fast, secure, and reliable delivery services.
            </li>
            <li className="flex items-start gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-500 inline-block"></span>
              Affordable prices with frequent promotions.
            </li>
            <li className="flex items-start gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-500 inline-block"></span>
              A seamless shopping experience with user-friendly navigation.
            </li>
            <li className="flex items-start gap-4">
              <span className="w-4 h-4 rounded-full bg-gray-500 inline-block"></span>
              Dedicated customer support to address your needs.
            </li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold mb-6 animate-fade-in bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Stay Connected
          </h3>
          <p className="text-lg mb-6 text-gray-400 animate-slide-up">
            Follow us on social media for the latest updates, promotions, and book recommendations.
          </p>
          <div className="flex justify-center gap-6 animate-slide-up">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 text-3xl transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 text-3xl transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 text-3xl transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700 text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
