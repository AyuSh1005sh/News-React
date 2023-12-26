import React, { useState } from 'react';
import SortFilter from './SortFilter';
import './App.css';

const SearchForm = ({ onSearch, onSortChange, onFilterChange }) => {
  const [keywords, setKeywords] = useState('');
  const [selectedSort, setSelectedSort] = useState('relevance'); // Add this line

  const handleSearch = () => {
    onSearch(keywords);
  };

  // New function to handle sorting change
  const handleSortChange = (value) => {
    setSelectedSort(value);
    onSortChange(value);
  };

  return (
    <div className="searchbox">
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Enter keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          style={{ marginRight: '10px' }}
        />
        <button type="button" className="btn btn-primary click" onClick={handleSearch}>
          Search
        </button>

        {/* Updated SortFilter Component */}
        <SortFilter onSortChange={handleSortChange}  />
      </div>
    </div>
  );
};

export default SearchForm;
