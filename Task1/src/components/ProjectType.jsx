import React, { useState, useEffect } from "react";
import { IoIosArrowBack } from "react-icons/io";
import PaginationDots from "./PaginationDots";
import { Link, useNavigate } from "react-router-dom";

const ProjectType = ({ handlePageChange, currentPage, totalPages }) => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(() => {
    return localStorage.getItem("projectType") || null;
  });

  const [hourlyRate, setHourlyRate] = useState(() => {
    return localStorage.getItem("hourlyRate") || "";
  });

  const [budget, setBudget] = useState(() => {
    return localStorage.getItem("budget") || "";
  });

  const [budgetReset, setBudgetReset] = useState(() => {
    return localStorage.getItem("budgetReset") === "true";
  });

  const [emailAlert, setEmailAlert] = useState(() => {
    return localStorage.getItem("emailAlert") || "";
  });

  const handleClick = (index) => {
    setSelected(index);
    localStorage.setItem("projectType", index);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
    navigate("/select-view");
  };

  useEffect(() => {
    localStorage.setItem("hourlyRate", hourlyRate);
  }, [hourlyRate]);

  useEffect(() => {
    localStorage.setItem("budget", budget);
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("budgetReset", budgetReset);
  }, [budgetReset]);

  useEffect(() => {
    localStorage.setItem("emailAlert", emailAlert);
  }, [emailAlert]);

  return (
    <div className="bg-[#FFFFFF] max-w-[500px] h-[550px] sm:h-[500px] sm:w-auto mx-auto mt-12 p-7 rounded-lg shadow-xl">
      <h2 className="text-center font-[600]">Project type</h2>
      <p className="text-[12px] text-center text-[#586477]">
        Don't panic - You can also customize these types in settings
      </p>

      <div className="text-sm grid grid-cols-3 p-2 rounded-lg mt-4 text-[12px] text-center">
        <div
          className={`border-[1px] border-[#a5a9afed] pr-2 p-2 rounded-l-lg cursor-pointer ${
            selected === "Time & Materials" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick("Time & Materials")}
        >
          Time & Materials
        </div>
        <div
          className={`border-[1px] border-[#a5a9afed] pr-2 p-2 cursor-pointer ${
            selected === "Fixed Fee" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick("Fixed Fee")}
        >
          Fixed Fee
        </div>
        <div
          className={`border-[1px] border-[#a5a9afed] p-2 rounded-r-lg cursor-pointer ${
            selected === "Non Billable" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handleClick("Non Billable")}
        >
          Non-Billable
        </div>
      </div>

      <div className="text-sm flex flex-col justify-center items-start gap-2 mt-4">
        <div className="flex flex-col">
          <label htmlFor="" className="font-[500]">
            Hourly
          </label>
          <p className="text-[12px] text-start text-[#586477]">
            We need hourly rates to track your project's billable amount
          </p>
        </div>

        <div className="flex justify-start items-start gap-3 text-[#586477] w-[80%] mt-1">
          <select
            value={hourlyRate}
            onChange={(e) => setHourlyRate(e.target.value)}
            className="border-[1px] border-[#C8CBD0] w-full pr-6 pl-2 py-1 outline-[#BCD8FC] rounded-md"
          >
            <option value="">Project Hourly Rate</option>
            <option value="10000">₹ 10,000</option>
            <option value="20000">₹ 20,000</option>
            <option value="30000">₹ 30,000</option>
          </select>
          <div className="flex justify-center items-center gap-3 border-[1px] border-[#C8CBD0] w-[40%] px-2 py-1 outline-[#BCD8FC] rounded-md">
            <span>₹</span>
            <input
              type="text"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>
      </div>

      <div className="text-sm flex flex-col justify-center items-start gap-2 mt-4">
        <div className="flex flex-col">
          <label htmlFor="" className="font-[500]">
            Budget
          </label>
          <p className="text-[12px] text-start text-[#586477]">
            We need hourly rates to track your project's billable amount
          </p>
        </div>

        <div className="flex justify-start items-start gap-3 text-[#586477] w-full mt-1">
          <select
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="border-[1px] border-[#C8CBD0] w-1/2 pr-6 pl-2 py-1 outline-[#BCD8FC] rounded-md"
          >
            <option value="">Hours Per Person</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div className="text-sm flex flex-col justify-center items-start gap-2 mt-4">
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            checked={budgetReset}
            onChange={(e) => setBudgetReset(e.target.checked)}
          />
          <span className="text-[13px] text-start text-[#586477]">
            Budget resets every month
          </span>
        </div>
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            checked={emailAlert}
            onChange={(e) => setEmailAlert(e.target.checked)}
          />
          <span className="text-[13px] text-start text-[#586477]">
            Send email alerts if project exceeds
            <input
              type="text"
              className="outline-none border-[1px] border-[#C8CBD0] w-10 h-6 rounded-sm p-2 mx-2"
            />
            % of budget
          </span>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center mt-[6%]">
        <div className="flex justify-center items-center">
          <IoIosArrowBack />
          <Link to="/">
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

export default ProjectType;
