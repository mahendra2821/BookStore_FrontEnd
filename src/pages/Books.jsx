import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get("https://bookstore-1-mebz.onrender.com/api/books"); // Replace with your API URL
        setBooks(res.data.data); // Assuming API returns an array of books
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch books.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-400"></div>
      </div>
    );

  if (error)
    return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black p-8">
      <h1 className="text-3xl text-center font-bold text-yellow-400 mb-12">Our Books</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book) => (
          <Link to={`/cart/${book._id}`} key={book._id}>
            <div
              className="group relative bg-white rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
              style={{ height: "340px" }} // Increased card height
            >
              {/* Book Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover rounded-t-lg" // Increased image height
              />

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-40 rounded-lg transition duration-300"></div>

              {/* Book Details */}
              <div className="p-4">
                <h2 className="text-sm font-semibold text-gray-800 truncate">{book.title}</h2>
                <p className="text-xs text-gray-950 truncate font-bold">by {book.author}</p>
                <p className="text-lg font-bold text-green-900 font-bold mt-2">Rs {book.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
