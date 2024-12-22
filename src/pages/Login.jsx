import React, { useState } from "react";
import axios from "axios";
import "./Login.css"; // Make sure to adjust the CSS as needed
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
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
      const res = await axios.post("http://localhost:5000/api/auth/user/login", formData);
      setMessage(res.data.message); // Show success message
      setIsSuccess(true);
      localStorage.setItem("token", res.data.data.token); // Store token in localStorage
      setTimeout(() => {
        setMessage("");
        setIsSuccess(null);
        setFormData({ email: "", password: "" });
      }, 3000); // Hide after 3 seconds
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setIsSuccess(false);
      setTimeout(() => {
        setError("");
        setIsSuccess(null);
        setFormData({ email: "", password: "" });
      }, 3000); // Hide after 3 seconds
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="p-8 border rounded-lg shadow-lg w-80 bg-white">
        {isSuccess === null ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            {message && <p className="text-green-600 text-center mb-4">{message}</p>}
            {error && <p className="text-red-600 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
               <div className="flex flex-row space-x-4">
                          <Link to="/" className="w-full">
                              <button
                              type="button"
                              className="w-full py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all"
                              >
                              Close
                              </button>
                          </Link>
                          <button
                              type="submit"
                              className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                          >
                              Submit
                          </button>
                          </div>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center">
            {isSuccess ? (
              <>
                <div className="w-16 h-16 bg-green-500 text-white rounded-full flex justify-center items-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white animate-checkmark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="mt-4 text-green-600 font-semibold">Successfully Logged In!</p>
              </>
            ) : (
              <>
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex justify-center items-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white animate-fail" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="mt-4 text-red-600 font-semibold">{error}</p>
              </>
            )}
            {/* Optional Close button after success/failure */}
            <button
              onClick={() => {
                setFormData({ email: "", password: "" });
                setMessage("");
                setError("");
                setIsSuccess(null);
              }}
              className="mt-4 py-2 px-6 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-all"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;



