import React, { useState } from 'react';
import '../App.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link,useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate=useNavigate()
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    streetAddress: '', 
    city: '',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('profileData', JSON.stringify(profileData));
    navigate("/business")
    console.log('Profile data saved to localStorage');
  };

  return (
    <>
      <div className='p-6 max-w-[700px] mx-auto'>
        <nav className='flex justify-between items-center text-sm sm:text-lg text-white'>
          <a href="">Logo</a>
          <a href="" className='text-[14px] sm:text-xl sm:font-[600]'>Create New Account</a>
          <a href="">contact us</a>
        </nav>

        <div className='bg-[#EBF1FE] mt-8 rounded-t-md grid grid-cols-3 justify-between items-center text-[10px] sm:text-sm '>
          <div className='flex justify-center items-center gap-2 rounded-r-2xl bg-blue-500 text-center h-12 py-4 text-white'>
            <span className='bg-gray-400 text-white rounded-[100%] p-1 text-sm'>1</span>
            <p>Your Profile</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <span className='bg-gray-400 text-white rounded-[100%] p-1 text-sm'>2</span>
            <p>Business Information</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <span className='bg-gray-400 text-white rounded-[100%] p-1 text-sm'>3</span>
            <p>Additional User</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='text-center bg-white px-8 py-6 rounded-b-md shadow-lg sm:px-10 sm:py-8'>
          <p>Step 1</p>
          <h2 className='text-[18px] font-[500] sm:text-2xl'>Your Profile</h2>
          <p className='text-[10px] sm:text-[12px] sm:mt-2'>Enter the login information for your account.</p>

          <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 sm:mt-8 sm:gap-3'>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>First Name*</label>
              <input 
                type="text" 
                name="firstName" 
                placeholder='Input your first name' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Last Name*</label>
              <input 
                type="text" 
                name="lastName" 
                placeholder='Input your last name' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Email*</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Input your email' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Phone Number*</label>
              <input 
                type="tel" 
                name="phoneNumber" 
                placeholder='Input your phone number' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Password*</label>
              <input 
                type="password" 
                name="password" 
                placeholder='Input your password' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Confirm Password*</label>
              <input 
                type="password" 
                name="confirmPassword" 
                placeholder='Input your confirm password' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>Street Address*</label>
              <input 
                type="text" 
                name="streetAddress" 
                placeholder='Input your street address' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
            <div className='flex flex-col justify-start items-start gap-[3px]'>
              <label className='text-[10px] text-gray-500 sm:text-[12px]'>City*</label>
              <input 
                type="text" 
                name="city" 
                placeholder='Input your city' 
                required 
                onChange={handleChange}
                className='outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2' 
              />
            </div>
          </div>
         

        <div className='flex justify-between items-center mt-5 sm:mt-7'>
          <div className='flex justify-start items-center text-sm sm:text-lg text-[#58A9FA]'>
            <IoIosArrowBack />
            <span>Back to login</span>
          </div>
            <button type='submit' className='text-white bg-[#5766ef] flex text-[14px] justify-center items-center gap-2 rounded-md px-3 py-1 shadow-lg sm:text-lg sm:px-4' >
              <span>Next Step</span>
              <IoIosArrowForward />
            </button>
        </div>
        </form>

      </div>
    </>
  );
};

export default Profile;
