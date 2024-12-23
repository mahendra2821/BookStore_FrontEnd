import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]); // Cart items state
  const [showPopup, setShowPopup] = useState(false); // Popup state

  // Fetch cart items from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  // Remove item from cart
  const handleRemoveItem = (bookId) => {
    const updatedCart = cartItems.filter((item) => item.bookId !== bookId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Purchase items
  const handleBuyNow = () => {
    localStorage.removeItem("cart"); // Clear the cart after purchase
    setCartItems([]); // Update the state
    setShowPopup(true); // Show the popup message

    // Hide popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-black p-8 text-white">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12 drop-shadow-lg">
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-300 text-xl">
          Your cart is empty. Add some books!
        </p>
      ) : (
        <div className="flex flex-col items-center gap-6">
          {cartItems.map((item) => (
            <div
              key={item.bookId}
              className="w-full max-w-lg bg-white text-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row gap-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-36 object-cover rounded-md"
              />
              <div className="flex-grow">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p className="text-lg text-green-500 font-semibold">
                  ${item.price}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => handleRemoveItem(item.bookId)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <button
            onClick={handleBuyNow}
            className="mt-6 bg-yellow-500 text-black px-6 py-3 rounded-md shadow-md hover:bg-yellow-600"
          >
            Buy Now
          </button>
        </div>
      )}

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-8 py-4 rounded-lg shadow-lg z-50 animate-fade-in">
          <p className="text-center font-bold">Successfully placed your order! 🎉</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
