import React, { useState } from "react";
import { FaListUl } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import PaginationDots from "./PaginationDots";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const ManageProjects = ({ handlePageChange, currentPage, totalPages }) => {
  const [selectedOption, setSelectedOption] = useState(null); 
  const navigate = useNavigate();

  const handleOptionClick = (option) => {
    setSelectedOption(option); 
  };

  const handleNextPage = () => {
    if (selectedOption) {
      localStorage.setItem("projectManagementOption", selectedOption);
      toast.success("Project Created Successfully");
      console.log(`Stored: ${selectedOption}`); 
      handlePageChange(0);
      navigate("/");
    } else {
      alert("Please select an option before submitting."); 
    }
  };

  return (
    <div className="bg-[#FFFFFF] max-w-[500px] h-[550px] sm:h-[500px] sm:w-auto mx-auto mt-12 p-7 rounded-lg shadow-2xl">
      <div className="flex flex-col gap-1">
        <h2 className="text-center text-lg font-[700]">
          Who can manage projects
        </h2>
        <p className="text-[11px] text-center text-[#586477]">
          Don't panic! You can also customize this view in settings
        </p>
      </div>

      <div className="flex flex-col gap-3 mt-6">
        <div
          className={`flex justify-start items-center gap-4 border-[0.5px] rounded-md p-3 py-5 cursor-pointer ${
            selectedOption === "everyone"
              ? "border-blue-500 border-[1.5px]"
              : "border-[#586477]"
          }`}
          onClick={() => handleOptionClick("everyone")}
        >
          <FaListUl size={30} className="text-[#586477]" />
          <div>
            <span className="font-[600] text-[#333E4E]">Everyone</span>
            <p className="text-[12px] text-[#586477]">
              All users can now see it, but guests cannot access the projects
            </p>
          </div>
        </div>

        <div
          className={`flex justify-start items-center gap-4 border-[0.5px] rounded-md p-3 py-5 cursor-pointer ${
            selectedOption === "admins"
              ? "border-blue-500 border-[1.5px]"
              : "border-[#586477]"
          }`}
          onClick={() => handleOptionClick("admins")}
        >
          <CgProfile size={30} className="text-[#586477]" />
          <div>
            <span className="font-[600] text-[#333E4E]">Only admins</span>
            <p className="text-[12px] text-[#586477]">
              Only admins can see this, but guests cannot access the projects
            </p>
          </div>
        </div>

        <div
          className={`flex justify-start items-center gap-4 border-[0.5px] rounded-md p-3 cursor-pointer ${
            selectedOption === "specificPeople"
              ? "border-blue-500 border-[1.5px]"
              : "border-[#586477]"
          }`}
          onClick={() => handleOptionClick("specificPeople")}
        >
          <FiUsers size={30} className="text-[#586477]" />
          <div>
            <span className="font-[600] text-[#333E4E]">
              Only to specific people
            </span>
            <p className="text-[12px] text-[#586477]">
              Only specific users can see this, but guests cannot access the
              projects
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center mt-[12%]">
        <div className="flex justify-center items-center">
          <IoIosArrowBack />
          <Link to="/select-view">
            {" "}
            <button
              className="text-black mt-auto"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Back
            </button>{" "}
          </Link>
        </div>
        <button
          onClick={handleNextPage}
          className="flex ml-[28%] bg-[#3D8DF5] text-white px-7 py-[7px] text-[12px] shadow-sm rounded-md mt-auto"
        >
          Submit
        </button>
      </div>

      <PaginationDots
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ManageProjects;
