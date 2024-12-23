import React, { useState } from "react";
import {Link} from 'react-router-dom';
const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // null, true, or false
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show loading animation
    setMessage("");
    setIsSuccess(null);

    try {
      const response = await fetch("http://localhost:5000/api/auth/admin/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.data.token); // Store token in local storage
        setIsSuccess(true);
        setMessage("Login successful! Redirecting...");
        setTimeout(() => window.location.href = "/bookstore", 2000); // Redirect after success
      } else {
        const errorData = await response.json();
        setIsSuccess(false);
        setMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("An error occurred. Please check your connection and try again.");
    } finally {
      setLoading(false); // Hide loading animation
    }
  };

  // const handleReset = () => {
  //   setFormData({
  //     email: "",
  //     password: "",
  //   });
  //   setMessage("");
  //   setIsSuccess(null);
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Loading Spinner */}
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex justify-center items-center">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-blue-500 hover:text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
          <Link to="/adminsignlogin">
          <button
              type="button"
            
              className="w-full mr-[10vw] py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300"
            >
              Back
            </button>
          </Link>
            <button
              type="submit"
              className="w-1/2 ml-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <div
            className={`mt-4 p-2 rounded-lg text-center transition duration-300 ${
              isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLogin;
