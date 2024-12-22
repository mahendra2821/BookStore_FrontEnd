import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isSocialMediaOpen, setIsSocialMediaOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleSection = (section) => {
    if (section === "quickLinks") setIsQuickLinksOpen(!isQuickLinksOpen);
    if (section === "socialMedia") setIsSocialMediaOpen(!isSocialMediaOpen);
    if (section === "contact") setIsContactOpen(!isContactOpen);
  };

  return (
    <footer className="bg-white-900 text-black-300 py-8">
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-3 lg:gap-12">
        {/* Quick Links */}
        <div className="mb-6 lg:mb-0">
          <h3
            className="text-xl ml-[10vw] font-semibold underline text-white flex items-center justify-between cursor-pointer lg:cursor-default"
            onClick={() => toggleSection("quickLinks")}
          >
            Quick Links
            <span className="text-orange-400 lg:hidden">
              {isQuickLinksOpen ? "-" : "+"}
            </span>
          </h3>
          <ul
            className={`mt-4 space-y-1 lg:space-y-3 lg:block transition-all duration-500 overflow-hidden ${
              isQuickLinksOpen || "hidden lg:block"
            }`}
          >
            <li>
              <a href="/about" className="text-white hover:text-gray-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="text-white hover:text-gray-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="text-white hover:text-gray-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-white hover:text-gray-400 transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-white hover:text-gray-400 transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mb-6 lg:mb-0">
          <h3
            className="text-xl font-semibold ml-[10vw] underline text-white flex items-center justify-between cursor-pointer lg:cursor-default"
            onClick={() => toggleSection("socialMedia")}
          >
            Follow Us
            <span className="text-orange-400 lg:hidden">
              {isSocialMediaOpen ? "-" : "+"}
            </span>
          </h3>
          <div
            className={`mt-4 flex space-x-4 lg:space-x-6 lg:block transition-all duration-500 overflow-hidden ${
              isSocialMediaOpen || "hidden lg:flex"
            }`}
          >
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-500 text-2xl  ml-[7vw]  lg:text-3xl transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 text-2xl lg:text-3xl transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 text-2xl lg:text-3xl transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-700 text-2xl lg:text-3xl transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h3
            className="text-xl ml-[10vw] font-semibold underline text-white flex items-center justify-between cursor-pointer lg:cursor-default"
            onClick={() => toggleSection("contact")}
          >
            Contact Us
            <span className="text-orange-400 lg:hidden">
              {isContactOpen ? "-" : "+"}
            </span>
          </h3>
          <div
            className={`mt-4 space-y-2 lg:space-y-4 lg:block transition-all duration-500 overflow-hidden ${
              isContactOpen || "hidden lg:block"
            }`}
          >
            <p className="text-lg">📧 Email: mahe939894@gmail.com</p>
            <p className="text-lg">📞 Phone: +1-234-567-890</p>
            <p className="text-lg">📍 Address: Hyderabad GouchiBouwli Lane no 5, Ashok Nager, 56789</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Bookstore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
