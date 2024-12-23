import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const { bookId } = useParams(); // Extract the book ID from URL
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [showSuccess, setShowSuccess] = useState(false); // Success message state

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/books/${bookId}`);
        setBook(res.data.data); // Assuming API returns the book details
        setIsLoading(false); // Set loading to false once data is fetched
      } catch (err) {
        console.log("Error fetching book details:", err);
        setIsLoading(false); // Stop loading even if there's an error
      }
    };

    fetchBookDetails();
  }, [bookId]); // Re-run the effect if the bookId changes

  // Add to cart logic
  const handleAddToCart = () => {
    const cartItem = {
      bookId: book._id,
      title: book.title,
      price: book.price,
      image: book.image,
    };

    // Get existing cart items from localStorage or initialize an empty array
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Add new book to cart
    cartItems.push(cartItem);

    // Save updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Show success message
    setShowSuccess(true);

    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  // Loading Animation
  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-black">
        <div className="loader"></div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-800 via-indigo-900 to-black p-8 text-white">
      <h1 className="text-4xl font-bold text-center text-yellow-400 mb-12 drop-shadow-lg">Book Details</h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Side - Book Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={book.image}
            alt={book.title}
            className="w-64 h-96 object-cover rounded-lg shadow-xl hover:scale-105 transform transition duration-300"
          />
        </div>

        {/* Right Side - Book Details */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold text-white mb-4">{book.title}</h2>
          <p className="text-lg text-gray-300 mb-4">by {book.author}</p>
          <p className="text-sm text-gray-400 mb-6">{book.description}</p>
          <p className="text-xl text-green-400 font-bold mb-6">${book.price}</p>

          {/* Reviews */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Reviews</h3>
            <p className="text-sm text-gray-400">⭐⭐⭐⭐☆ (20 reviews)</p>
          </div>

          {/* Add to Cart Button */}
          <div className="mt-4">
            <button
              onClick={handleAddToCart}
              className="bg-yellow-500 text-black hover:bg-yellow-600 px-8 py-3 rounded-md shadow-md hover:scale-105 transform transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg animate-pop z-50">
          <p>Successfully added to cart!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
