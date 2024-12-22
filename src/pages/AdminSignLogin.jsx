import React from "react";
import { Link } from "react-router-dom";

const  AdminSignLogin = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-black">
      <div className="text-center p-8 bg-black shadow-lg rounded-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-white">Welcome to Book Store</h2>
        <p className="mb-4 text-white">Please choose an option to proceed:</p>
        <div className="space-x-4">
          <Link to="/adminsignup">  
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
              Signup
            </button>
          </Link>
          <Link to="/adminlogin">
            <button className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminSignLogin;
