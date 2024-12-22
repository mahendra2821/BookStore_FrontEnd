import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const slides = [
    {
      image: "https://img.freepik.com/premium-photo/open-hand-showing-aum-locket-with-beads-red-hindu-book-surface-with-flowers_466689-47268.jpg?1200x600?text=Slide+1",
      title: "Welcome to MB BookStore",
      description: "Find amazing books that inspire and delight."
    },
    {
      image: "https://img.freepik.com/free-psd/books-stack-icon-isolated-3d-render-illustration_47987-15482.jpg?t=st=1734606950~exp=1734610550~hmac=377b09d989d53c4a4e44d6499cd9dad9d25eabc0de9a63b0c2dcd9730f0625bd&1600x800?text=Slide+2",
      title: "Upload Your Masterpiece",
      description: "Share your wonderful stories with the world.",
    },
    {
      image: "https://img.freepik.com/free-photo/front-view-stacked-books-ladders-education-day_23-2149241046.jpg?t=st=1734607056~exp=1734610656~hmac=d424eb8bb269eefc41a8533b766de1b8836db162698321d124623d334e2b4809&1600x800?text=Slide+3",
      title: "Discover New Reads",
      description: "Find the perfect book for every mood.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showBanner, setShowBanner] = useState(true);

  // Handle Next Slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Handle Previous Slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Set an interval to change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Discount Banner */}
      {showBanner && (
        <div className="bg-yellow-100 text-black text-center py-4 px-2 flex justify-between items-center animate-text-color-change">
          <div className="flex-grow text-center font-bold text-sm">
            🎉 40% OFF on all books! Limited time offer.
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-[10px] font-bold hover:text-gray-300 ml-4 mr-2"
          >
            ✕
          </button>
        </div>
      )}




      

      {/* Hero Section */}
      <div className="w-full relative bg-black">
        <div
          className="w-full bg-cover bg-center flex items-center justify-center transition-all duration-70"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            height: "100vh",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="z-10 text-center text-white p-4 max-w-lg">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {slides[currentSlide].title}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl mb-6">
              {slides[currentSlide].description}
            </p>
            <Link to="/books">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg transition">
                Explore Now
              </button>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full"
        >
          &#8250;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Responsive Styling */}
      <style jsx>{`
        div[style] {
          height: 100vh;
        }

        @media (max-width: 768px) {
          div[style] {
            height: 50vh; /* Reduce height to half on mobile */
          }
        }

        /* Animation for text color change */
        .animate-text-color-change {
          animation: textColorChange 5s infinite;
        }

        @keyframes textColorChange {
          0% {
            color: #f59e0b; /* Yellow */
          }
          33% {
            color: #ef4444; /* Red */
          }
          66% {
            color: #ec4899; /* Pink */
          }
          100% {
            color: #f59e0b; /* Yellow */
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
