import React from 'react';
import { Mail, Lock, ArrowRight, Shield } from 'lucide-react';

function UserVerification() {
  return (
    <div  className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div data-aos='zoom-in' className="max-w-md w-full bg-white  rounded-2xl shadow-xl p-8">
        <div className="text-center  mb-8">
          <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center gap-3 justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">Verify Account</h2>
          <div>
  <p className='text-sm  text-red-700'>Your account has not been verified</p>
</div>
        </div>

        <form className="space-y-6">
          
           
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 
                     transition-colors duration-200 flex items-center justify-center space-x-2 
                     focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span>Resend Verification Email</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Need help? <a href="#" className="text-indigo-600 hover:text-indigo-500">Contact Support</a>
        </p>
      </div>
    </div>
  );
}

export default UserVerification;