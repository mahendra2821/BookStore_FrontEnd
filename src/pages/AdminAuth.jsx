import React, { useState } from "react";

const AdminAuth = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleProceed = () => {
    if (isChecked) {
      window.location.href = "/adminsignlogin"; // Navigate to the signup/login page
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="p-8 border border-gray-700 rounded-lg shadow-lg w-96 bg-gray-800">
        <h2 className="text-3xl font-bold mb-6 text-center">Admin Rules & Regulations</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <p>1. Maintain integrity and fairness in all transactions.</p>
          <p>2. Ensure user data privacy and security.</p>
          <p>3. Follow the terms and conditions of the platform.</p>
          <p>4. Abide by the guidelines for the role of Admin.</p>
        </div>

        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mr-2 w-4 h-4 border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
          />
          <label htmlFor="agree" className="text-sm text-gray-200 cursor-pointer">
            I agree to the rules and regulations
          </label>
        </div>

        <button
          onClick={handleProceed}
          disabled={!isChecked}
          className={`w-full py-2 mt-6 rounded text-white transition-all duration-300 ${
            isChecked
              ? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              : "bg-gray-500 cursor-not-allowed"
          }`}
        >
          Agree and Proceed
        </button>
      </div>
    </div>
  );
};

export default AdminAuth;
