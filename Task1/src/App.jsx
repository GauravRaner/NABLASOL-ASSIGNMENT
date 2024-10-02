import ManageProjects from './components/ManageProjects';
import CreateProject from './components/CreateProject';
import ProjectType from './components/ProjectType';
import SelectView from './components/SelectView';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 4;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateProject currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />} />
        <Route path="/project-type" element={<ProjectType currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />} />
        <Route path="/select-view" element={<SelectView currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />} />
        <Route path="/manage-projects" element={<ManageProjects currentPage={currentPage} totalPages={totalPages} handlePageChange={handlePageChange} />} />
      </Routes>
    </Router>
  );
};

export default App;
