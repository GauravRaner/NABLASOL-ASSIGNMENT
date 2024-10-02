import React from 'react';

const PaginationDots = ({ totalPages, currentPage, onPageChange }) => {
  const renderDots = () => {
    return [...Array(totalPages)].map((_, index) => (
      <span
        key={index}
        className={`cursor-pointer inline-block mx-1 mt-2  rounded-full transition-colors ${
          index === currentPage 
            ? 'w-3 h-2 bg-[#929498]' 
            : 'w-2 h-2 bg-[#C8CBD0]' 
        }`}
      ></span>
    ));
  };

  return (
    <div className="flex justify-center items-center mt-4 mx-auto">
      {renderDots()}
    </div>
  );
};

export default PaginationDots;
