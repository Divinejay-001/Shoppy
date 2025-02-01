import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMailchimp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    setSubmitted(true);
  };

  return (
    <div className="flex items-center justify-center text-gray-700 min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-4 shadow-2xl rounded-2xl bg-white"
      >
        <div>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Forgot Password
          </h2>
          <p className="text-center"> You will receive an otp shortly</p>
              <div>
                
                <div className="flex justify-center items-center">
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2  border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                  <Mail className="relative right-7"/>
                </div>
              </div>
              <button
                type="submit"
                className="w-full mt-2 px-4 py-2 bg-tertiary text-white font-medium text-sm rounded-md hover:bg-blue-700 focus:outline-none duration-1000 transition scale-100 focus:ring-2 focus:ring-blue-500"
              >
                Send OTP              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center "
            >
              <p className="text-gray-700 text-sm">
                Enter the OTP sent to your email
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="">
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                    OTP
                  </label>
                  <div className="flex">
                    <input
                      id="otp"
                      type="number"
                      placeholder="Enter the OTP"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    
                    
                    />
      <FaMailchimp className="relative text-center right-6 -bottom-3 text-xl text-gray-400" />
                  </div>

                </div>
              <Link to='/reset'>
                <button type="submit"
                    className="w-full mt-2 px-4 py-2 bg-tertiary text-white font-medium text-sm rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 duration-700">
                Verify
                </button>
              </Link>
              </form>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPasswordPage;
