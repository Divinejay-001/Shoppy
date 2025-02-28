import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../btn/Button';
// import InputBox from '../components/InputBox';
import { AppContext } from "../../context/AppContext"; 
import { toast } from 'react-toastify'; // Ensure toast is installed and configured
import Logo from '../../assets/logo.png'; // Ensure Logo component is properly imported

const ResetPasswordPage = () => {
  const { userInfo } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: '' })); // Clear error for that field
  };

  const validate = () => {
    const validationErrors = {};
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if (!passwordRegex.test(formData.password))
      validationErrors.password = 'Password must include uppercase, lowercase, and numbers';
    if (formData.password.length < 8)
      validationErrors.password = 'Password must be at least 8 characters long';
    if (formData.password !== formData.confirmPassword)
      validationErrors.confirmPassword = 'Passwords do not match';

    return validationErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/resetPassword`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          newPassword: formData.password,
        }),
      });

      const data = await response.json();
      if (!data.success) {
        toast.error(data.message);
        throw new Error(data.message || 'Something went wrong');
      }

      toast.success('Password updated successfully');
      setFormData({
        password: '',
        confirmPassword: '',
      });
      navigate('/signin'); // Redirect to home or login page
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {userInfo ? (
        <Navigate to="/home" />
      ) : (
        <section className="grid place-items-center bg-gray-950 min-h-screen">
         <div className='flex space-x-1 items-center absolute  text-3xl left-6 top-3'>
                                   <img className="w-8 h-8 object-cover rounded-full" src={Logo} alt="Logo" />
                                <h1 className=' text-white font-semibold'>Shophere</h1>
                              </div>  
          <div className="h-auto bg-white w-auto relative overflow-hidden p-4 md:p-12 rounded-20 shadow-lg">
            <form className="w-full" onSubmit={handleSubmit}>
              <h1 className="text-4xl text-green-600 font-extrabold capitalize text-center mb-12">
                Reset Password
              </h1>
              <div className='grid gap-2 text-black'>
                <input
                  name="password"
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  value={formData.password}
                  errorMessage={errors.password}
                  className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                  value={formData.confirmPassword}
                  errorMessage={errors.confirmPassword}
                  className='w-full px-4 py-2 text-md border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent'
                />
              </div>
              {errors.general && (
                <p className="text-red-500 text-center mt-2">{errors.general}</p>
              )}
              <Button
                onClick={handleSubmit}
                disabled={loading}
                text={loading ? 'Updating...' : 'Update Password'}
                styles="mt-4 bg-green-500 hover:bg-green-700 hover:text-white transition duration-500 text-black md:w-full"
              />
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default ResetPasswordPage;
