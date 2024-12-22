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
        const res = await axios.get("http://localhost:5000/api/books"); // Replace with your API URL
        setBooks(res.data.data); // Assuming API returns an array of books
        setLoading(false);


        // console.log(res.data.tittle); // Debugging: Check API response structure
      } catch (err) {
        setError("Failed to fetch books.");
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div className="text-center mt-10 text-lg">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-black p-4">
      <h1 className="text-3xl text-center font-bold text-white mb-8">Our Books</h1>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {books.map((book) => (
          <Link to={`/cart/${book._id}`} key={book._id}>
            <div
              className="relative bg-gray-900 p-3 rounded-lg shadow-md transform transition duration-300 hover:scale-105"
              style={{ maxWidth: "180px", margin: "0 auto" }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-40 object-cover rounded-lg mb-2"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 rounded-lg transition duration-300"></div>
              <h2 className="text-sm font-semibold text-white">{book.title}</h2>
              <p className="text-xs text-gray-400">{book.author}</p>
              <p className="text-sm text-blue-500 font-bold mt-2">${book.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;
