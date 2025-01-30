import React, { useState } from 'react';
import { motion } from 'framer-motion';

const VerifyOtpPage = () => {
  const [otp, setOtp] = useState('');

  const handleVerify = (e) => {
    e.preventDefault();
    // Add OTP submission logic here
    console.log('OTP submitted:', otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md w-full bg-white shadow-lg rounded-2xl">
          <div className="p-6">
            <form onSubmit={handleVerify}>
              <h2 className="text-2xl font-semibold text-center mb-6">Verify OTP</h2>
              <div className="mb-4">
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter the OTP"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit OTP
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyOtpPage;
