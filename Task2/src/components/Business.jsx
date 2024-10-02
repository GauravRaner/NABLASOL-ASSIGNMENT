import React, { useState } from "react"; 
import "../App.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { Link, useNavigate } from 'react-router-dom'; 
import {toast} from 'react-hot-toast'

const Business = () => {
  const [formData, setFormData] = useState({
    brandName: '',
    brandType: '',
    streetAddress: '',
    city: '',
    zipCode: '',
    taxId: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    localStorage.setItem("businessData", JSON.stringify(formData)); 
    toast.success("Submitted Successfully")
    navigate('/'); 
  };

  return (
    <>
      <div className="p-6 max-w-[700px] mx-auto">
        <nav className="flex justify-between items-center text-sm sm:text-lg text-white px-4">
          <a href="">Logo</a>
          <a href="" className="text-[14px] sm:text-xl sm:font-[600]">
            Create New Account
          </a>
          <a href="">Contact us</a>
        </nav>

        <div className="bg-[#EBF1FE] mt-8 rounded-t-md grid grid-cols-3 justify-between items-center text-[10px] sm:text-sm text-white">
          <div className="flex justify-center items-center gap-2 bg-blue-500 text-center h-12 py-4">
            <span className="bg-gray-400 text-white rounded-[100%] p-1 text-sm">
              1
            </span>
            <p>Your Profile</p>
          </div>

          <div className="flex justify-center items-center gap-2 rounded-r-2xl bg-blue-500 h-12 py-4">
            <span className="bg-gray-400 text-white rounded-[100%] p-1 text-sm">
              2
            </span>
            <p>Business Information</p>
          </div>

          <div className="flex justify-center items-center gap-2 text-gray-500">
            <span className="bg-gray-400 text-white rounded-[100%] p-1 text-sm">
              3
            </span>
            <p>Additional User</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="text-center bg-white px-8 py-6 rounded-b-md shadow-lg sm:px-10 sm:py-8"
        >
          <p>Step 2</p>
          <h2 className="text-[18px] font-[500] sm:text-2xl">Business Information</h2>
          <p className="text-[10px] sm:text-[12px] sm:mt-2">
            Please enter information about your company
          </p>
          <h3 className="text-start text-[12px] sm:text-sm font-[600] text-blue-700 mt-6">GENERAL INFORMATION</h3>

          <div className="grid grid-cols-1 mt-4 gap-2 sm:grid-cols-2 sm:mt-4 sm:gap-3">

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">
                Brand Name*
              </label>
              <input
                type="text"
                name="brandName" 
                value={formData.brandName} 
                onChange={handleChange} 
                placeholder="Input your brand name"
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2"
                required 
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">
                Brand Type*
              </label>
              <select
                name="brandType" 
                value={formData.brandType}
                onChange={handleChange} 
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 text-gray-400 rounded-md text-[12px] sm:text-[14px]"
                required 
              >
                <option value="" disabled>Select Type Of Your Brand</option>
                <option value="Local">Local</option>
                <option value="National">National</option>
              </select>
            </div>

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">
                Street Address*
              </label>
              <input
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange} 
                placeholder="Input your Street Address"
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2"
                required 
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">City*</label>
              <input
                type="text"
                name="city" 
                value={formData.city} 
                onChange={handleChange} 
                placeholder="Input City"
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2"
                required 
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">Zip Code*</label>
              <input
                type="text"
                name="zipCode" 
                value={formData.zipCode} 
                onChange={handleChange} 
                placeholder="Input Zip Code"
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2"
                required 
              />
            </div>

            <div className="flex flex-col justify-start items-start gap-[3px] ">
              <label className="text-[10px] text-gray-500 sm:text-[12px]">Tax ID Number*</label>
              <input
                type="text"
                name="taxId" 
                value={formData.taxId} 
                onChange={handleChange}
                placeholder="Input Tax ID Number"
                className="outline-[#7177E1] outline-[0.5px] border-[0.5px] px-2 py-1 rounded-md placeholder:text-[12px] text-[12px] w-full sm:text-[14px] sm:py-2"
                required 
              />
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-start text-[12px] sm:text-sm font-[600] text-blue-700">DOCUMENTS</h3>
            <p className="text-start text-sm">
              Once the following document signed, you'll be ready to get started.
            </p>

            <div className="flex justify-between items-center gap-2 mt-4">
              <div className="flex justify-between items-center border-[0.5px] border-gray-400 rounded-md px-3 py-1 w-full">
                <p className="text-sm">Electronically sign the agreement(s)</p>
                <span className="text-green-500">
                  <FaCheck />
                </span>
              </div>
              <span className="p-1 text-lg bg-[#7181e9] text-white border-none rounded-sm shadow-md shadow-[#7181e9]">
                <IoIosArrowForward />
              </span>
            </div>

            <div className="flex justify-between items-center gap-2 mt-4">
              <div className="flex justify-between items-center border-[0.5px] border-gray-400 rounded-md px-3 py-1 w-full">
                <p className="text-sm text-start">
                  Non-adult beverage Kroger market supplier waiver and release
                </p>
                <span className="text-red-500">
                  <RxCross1 />
                </span>
              </div>
              <span className="p-1 text-lg bg-[#7181e9] text-white border-none rounded-sm shadow-md shadow-[#7181e9]">
                <IoIosArrowForward />
              </span>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-start text-[12px] sm:text-sm font-[600] text-blue-700">COI PDG UPLOAD</h3>
            <p className="text-start text-sm">
              Once the following document signed, you'll be ready to get started.
            </p>

            <div className="flex justify-between items-center gap-2 mt-4">
              <div className="flex justify-between items-center border-[0.5px] border-gray-400 rounded-md px-3 py-1 w-full">
                <p className="text-sm">Electronically sign the agreement(s)</p>
                <span className="text-green-500">
                  <FaCheck />
                </span>
              </div>
              <span className="p-1 text-lg bg-[#7181e9] text-white border-none rounded-sm shadow-md shadow-[#7181e9]">
                <IoIosArrowForward />
              </span>
            </div>
          </div>

        <div className="flex justify-between items-center mt-5 sm:mt-7">
          <div className="flex justify-start items-center text-sm sm:text-lg text-[#58A9FA]">
            <IoIosArrowBack />
            <span>Back to login</span>
          </div>

          <div className="flex justify-center items-center gap-2">
            <Link to='/'>
              <div className="border-[#5766ef] border-[1px] text-[#5766ef] flex text-[14px] justify-center items-center gap-2 rounded-md px-3 py-1 shadow-lg sm:text-lg sm:px-4">
                <IoIosArrowBack />
                <span>Previous</span>
              </div>
            </Link>

            <button type="submit"  className="text-white bg-[#5766ef] flex text-[14px] justify-center items-center gap-2 rounded-md px-5 py-1 shadow-lg sm:text-lg sm:px-4">
              <span>Submit</span>
            </button>
          </div>
        </div>
        </form>

      </div>

    </>
  );
};

export default Business;
