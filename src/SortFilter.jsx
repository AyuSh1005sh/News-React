import React from 'react';
 import './App.css';

const SortFilter = ({ onSortChange, onFilterChange }) => {
  return (
    <div className="rel" style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ marginRight: '10px' }}>
        <select id="sortBy" onChange={(e) => onSortChange(e.target.value)}>
          <option value="relevance">Relevance</option>
          <option value="popularity">Popularity</option>
          <option value="publishedAt">Published At</option>
        </select>
      </div>
      {/* <div>
        <select id="filterBy" onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div> */}
    </div>
  );
};

export default SortFilter;
