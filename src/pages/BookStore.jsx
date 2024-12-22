import React, { useState } from "react";
import axios from "axios";

const BookStore = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Fetch admin token

    if (!token) {
      setError("You are not authorized to perform this action.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/books", // Replace with your backend URL
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setMessage(res.data.message || "Book added successfully!");
      setError("");
      setFormData({
        title: "",
        author: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });

      // Close form after success
      setTimeout(() => setShowForm(false), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add book.");
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Success Message at the Top */}
      {message && (
        <div className="absolute top-0 left-0 w-full bg-green-500 text-white text-center py-2 z-50">
          {message}
        </div>
      )}

      {/* Upload Button */}
      {!showForm && (
        <div className="flex justify-center items-center h-screen">
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Upload New Book
          </button>
        </div>
      )}

      {/* Form Section */}
      {showForm && (
        <div className="flex justify-center items-center min-h-screen bg-black">
          <div className="p-8 border rounded-lg shadow-md w-full max-w-md bg-gray-900 relative">
            {loading && (
              <div className="absolute inset-0 bg-black bg-opacity-75 flex justify-center items-center">
                <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <h2 className="text-2xl font-bold mb-6 text-white">Add a New Book</h2>
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="title"
                placeholder="Book Title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={formData.image}
                onChange={handleChange}
                required
                className="w-full p-2 mb-4 border rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookStore;
