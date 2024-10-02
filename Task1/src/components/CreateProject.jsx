import React, { useState, useEffect } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import PaginationDots from './PaginationDots';
import { useNavigate } from 'react-router-dom';

const CreateProject = ({ handlePageChange, currentPage, totalPages }) => {
  const [projectName, setProjectName] = useState('');
  const [clients, setClients] = useState(["Client 1", "Client 2"]);
  const [selectedClient, setSelectedClient] = useState('');
  const [newClient, setNewClient] = useState('');
  const [isAddingClient, setIsAddingClient] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate()

 

  const handleNextPage = () => {
    const projectData = {
      projectName,
      selectedClient,
      startDate,
      endDate,
      notes,
    };


    localStorage.setItem('createProjectData', JSON.stringify(projectData));

    navigate('/project-type')
    if (currentPage < totalPages - 1) {
      handlePageChange(currentPage + 1);
    }
  };

  const handleAddClient = () => {
    if (newClient.trim() !== '') {
      setClients([...clients, newClient]);
      setNewClient('');
      setIsAddingClient(false);
    }
  };

  return (
    <div className='bg-[#FFFFFF] max-w-[500px] h-auto sm:w-auto mx-auto mt-12 p-7 rounded-md shadow-lg'>
      <h2 className='text-center font-[600]'>Create a project</h2>

      <div className='text-sm flex flex-col justify-center items-start gap-2 mt-4'>
        <label className='font-[500]'>Project name</label>
        <input
          type="text"
          placeholder='Enter project name here'
          className='border-[1px] border-[#C8CBD0] w-full px-2 py-1 outline-[#BCD8FC] rounded-md placeholder:text-[#a5a9afed]'
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>

      <div className='text-sm flex flex-col justify-center items-start gap-2 mt-4'>
        <label className='font-[500]'>Client</label>
        <div className='flex justify-center items-center gap-3 text-[#a5a9afed] w-full'>
          <select
            className='border-[1px] border-[#C8CBD0] w-full pr-6 pl-2 py-1 outline-[#BCD8FC] rounded-md'
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
          >
            <option value="">Select Client</option>
            {clients.map((client, index) => (
              <option key={index} value={client}>{client}</option>
            ))}
          </select>
          <p>or</p>
          <button
            className='border-[1px] border-[#C8CBD0] w-1/2 sm:w-[40%] px-2 py-1 outline-[#BCD8FC] rounded-md'
            onClick={() => setIsAddingClient(true)}
          >
            + New Client
          </button>
        </div>

        {isAddingClient && (
          <div className='mt-3 flex items-center gap-2'>
            <input
              type="text"
              placeholder="Enter new client name"
              value={newClient}
              onChange={(e) => setNewClient(e.target.value)}
              className='border-[1px] border-[#C8CBD0] w-full px-2 py-1 outline-[#BCD8FC] rounded-md'
            />
            <button
              className='bg-[#3D8DF5] text-white px-4 py-[7px] text-[12px] shadow-sm rounded-md'
              onClick={handleAddClient}
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div className='text-sm flex flex-col justify-center items-start gap-2 mt-4'>
        <label className='font-[500]'>Dates</label>
        <div className='flex justify-center items-center w-full gap-1 text-[#a5a9afed]'>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className='border-[1px] border-[#C8CBD0] w-full px-2 py-1 outline-[#BCD8FC] rounded-md'
          />
          <span>-</span>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className='border-[1px] border-[#C8CBD0] w-full px-2 py-1 outline-[#BCD8FC] rounded-md'
          />
        </div>
      </div>

      <div className='text-sm flex flex-col justify-center items-start gap-2 mt-4'>
        <label className='font-[500]'>Notes</label>
        <textarea
          placeholder='Optional'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className='border-[1px] border-[#C8CBD0] w-full h-20 px-2 py-1 outline-[#BCD8FC] rounded-md placeholder:text-[#a5a9afed]'
        />
      </div>

      <div className='mt-6 flex justify-center md:justify-start items-center'>
    
        <button
          className='flex mx-auto bg-[#3D8DF5] text-white px-7 py-[7px] text-[12px] shadow-sm rounded-md mt-auto'
          onClick={handleNextPage}
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

export default CreateProject;
