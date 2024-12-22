import React, { useState } from "react";
import {Link} from 'react-router-dom'
const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    secretKey: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showEncryptionId, setShowEncryptionId] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(null); // null, true, or false

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/admin/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.data.token); // Store token in session storage
        setIsSuccess(true);
        setMessage("Registration successful! You may Login.");
      } else {
        const errorData = await response.json();
        setIsSuccess(false);
        setMessage(errorData.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("An error occurred. Please check your connection and try again.");
    }
  };

  const handleProceed = () => {
    window.location.href = "/adminlogin"; // Redirect to the dashboard page or any other page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-black rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

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

          {/* Encryption ID Field */}
          <div className="mb-6 relative">
            <label htmlFor="secretKey" className="block text-sm font-medium mb-1">
              Encryption ID
            </label>
            <input
              type={showEncryptionId ? "text" : "password"}
              id="secretKey"
              name="secretKey"
              value={formData.secretKey}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
            <button
              type="button"
              onClick={() => setShowEncryptionId(!showEncryptionId)}
              className="absolute right-3 top-9 text-blue-500 hover:text-blue-600"
            >
              {showEncryptionId ? "Hide" : "Show"}
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
           <Link to="/adminsignlogin" > 
           <button
              className="w-full mr-[10vw] py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg">
              Close
            </button>
            </Link>
            <button
              type="submit"
              className="w-1/2 ml-2 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Message Display */}
        {message && (
          <div
            className={`mt-4 p-2 rounded-lg text-center ${
              isSuccess ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {message}
          </div>
        )}

        {/* Proceed Button */}
        {isSuccess && (
          <div className="mt-4">
            <button
              onClick={handleProceed}
              className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSignup;
