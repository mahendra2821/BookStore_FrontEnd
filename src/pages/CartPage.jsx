import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const simulateLoading = (callback) => {
    setIsLoading(true);
    setTimeout(() => {
      callback();
      setIsLoading(false);
    }, 2000);
  };

  const handleRemoveItem = (bookId) => {
    simulateLoading(() => {
      const updatedCart = cartItems.filter((item) => item.bookId !== bookId);
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    });
  };

  const handleBuyNow = () => {
    simulateLoading(() => {
      localStorage.removeItem("cart");
      setCartItems([]);
      setShowPopup(true);

      setTimeout(() => setShowPopup(false), 3000);
    });
  };

  const getRandomStars = () => Math.floor(Math.random() * 2) + 4; // Random stars between 4 and 5
  const getRandomBought = () => Math.floor(Math.random() * 2000) + 100; // Random numbers bought

  return (
    <div className="min-h-screen bg-gradient-to-b bg-black p-12 text-white">
      <h1 className="text-5xl font-bold text-center text-yellow-400 mb-16 drop-shadow-lg">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-300 text-2xl">
          Your cart is empty. Add some books!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-12">
          {cartItems.map((item) => (
            <div
              key={item.bookId}
              className="w-full max-w-5xl bg-gray-900 border first-letter: text-white rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Left - Book Image */}
              <div className="w-full md:w-1/3 flex justify-center ml-5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-72 h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right - Book Details */}
              <div className="flex-grow ml-[8vw] mt-7" >
                <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                <p className="text-lg text-yellow-400 mb-2">by {item.author || "Unknown Author"}</p>
                <p className="text-sm text-gray-300 mb-4">{item.description || "No description available."}</p>
                <p className="text-2xl text-green-400 font-semibold mb-4">
                  ₹{item.price}
                </p>

                <p className="text-sm text-gray-400 mb-2">
                  ⭐  {getRandomStars()} ({getRandomBought()} bought)
                </p>

                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => handleRemoveItem(item.bookId)}
                    className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transform hover:scale-105 transition-transform duration-300 text-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
          <button
            onClick={handleBuyNow}
            className="mt-12 bg-yellow-500 text-black px-12 py-4 rounded-xl shadow-lg hover:bg-yellow-600 transform hover:scale-105 transition-transform duration-300 text-2xl font-semibold"
          >
            Buy Now
          </button>
        </div>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-yellow-500"></div>
        </div>
      )}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-12 py-6 rounded-xl shadow-lg z-50 animate-fade-in">
          <p className="text-center text-2xl font-bold">
            Successfully placed your order! 🎉
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
