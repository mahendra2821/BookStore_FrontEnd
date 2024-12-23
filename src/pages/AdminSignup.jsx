
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    secretKey: '',
  });

  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.password || !formData.secretKey) {
      setIsSuccess(false);
      setMessage('All fields are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true);
        setMessage(data.message);
      } else {
        setIsSuccess(false);
        setMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage('An error occurred. Please try again later.');
    }
  };

  const handleClose = () => {
    window.location.href = '/adminlogin'; // Close and redirect to login page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray-900 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Admin Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1 text-white ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border-blue-300 rounded-lg"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg  border border-blue-300"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-blue-300 rounded-lg"
              required
            />
          </div>

          {/* Secret Key Field */}
          <div className="mb-6">
            <label htmlFor="secretKey" className="block text-sm font-medium mb-1 text-white">
              Secret Key
            </label>
            <input
              type="password"
              id="secretKey"
              name="secretKey"
              value={formData.secretKey}
              onChange={handleChange}
              className="w-full px-4 py-2border border-blue-300 rounded-lg"
              required
            />
          </div>

          {/* Buttons */}
         <div className="flex justify-between">
            {/* Close Button */}
            {/* <button
              type="button"
              onClick={handleClose}
              className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
            >
              Close
            </button> */}
            {/* Submit Button */}
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
              isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}
          >
            {message}
          </div>
        )}

        {/* Login Button after successful registration */}
        {isSuccess && (
          <div className="mt-4">
            <Link to="/adminlogin">
              <button
                className="w-full py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
              >
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminSignup;
