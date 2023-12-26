// PaginationComponent.js
import React from 'react';
import { Pagination, Button } from 'react-bootstrap';
import './App.css'
const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const handlePreviousPage = () => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  return (
    <div className="pagination-container d-flex justify-content-between align-items-center mt-4">
      <div className="navigation-buttons">
        <Button variant="primary" onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </Button>
      </div>
      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      <div className="navigation-buttons">
        <Button
          variant="primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PaginationComponent;
