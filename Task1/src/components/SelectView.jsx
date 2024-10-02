import React, { useState, useEffect } from "react";
import { CiBoxList } from "react-icons/ci";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import PaginationDots from "./PaginationDots";
import { Link, useNavigate } from "react-router-dom";

const SelectView = ({ handlePageChange, currentPage, totalPages }) => {
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState(() => {
    return localStorage.getItem("selectedView") || null;
  });

  const handleSelect = (option) => {
    setSelectedView(option);
    localStorage.setItem("selectedView", option); 
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
    navigate("/manage-projects");
  };

  return (
    <div className="bg-[#FFFFFF] max-w-[500px] h-[550px] sm:h-[500px] sm:w-auto mx-auto mt-12 p-7 rounded-lg shadow-2xl">
      <h2 className="text-center text-lg font-[700]">Select a view</h2>
      <p className="text-[12px] text-center text-[#586477]">
        You can also customize this view in settings
      </p>

      <div className="flex justify-center gap-12 mt-8">
        <div>
          <div
            className={`w-48 h-36 border-[1px] rounded-md flex justify-center items-center cursor-pointer ${
              selectedView === "list"
                ? "border-blue-500 border-[1.5px]"
                : "border-[#595a5bed]"
            }`}
            onClick={() => handleSelect("list")}
          >
            <CiBoxList size={70} className="text-[#595a5bed]" />
          </div>
          <h3 className="text-center">List</h3>
        </div>

        <div>
          <div
            className={`w-48 h-36 border-[1px] rounded-md flex justify-center items-center cursor-pointer ${
              selectedView === "board"
                ? "border-blue-500 border-[1.5px]"
                : "border-[#595a5bed]"
            }`}
            onClick={() => handleSelect("board")}
          >
            <LuLayoutDashboard size={70} className="text-[#595a5bed]" />
          </div>
          <h3 className="text-center">Board</h3>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center mt-[30%]">
        <div className="flex justify-center items-center">
          <IoIosArrowBack />
          <Link to="/project-type">
            {" "}
            <button
              className="text-black mt-auto"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Back
            </button>
          </Link>
        </div>
        <button
          onClick={handleNextPage}
          className="flex ml-[30%] bg-[#3D8DF5] text-white px-7 py-[7px] text-[12px] shadow-sm rounded-md mt-auto"
        >
          Next
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

export default SelectView;
