import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ArticleList from './ArticleList';
import SortFilter from './SortFilter';
import Navbar from './Navbar';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');
  const [filterBySource, setFilterBySource] = useState('');

  const fetchArticles = async (keywords, sortBy) => {
    const apiKey = '813f0bb04d484d3f9092f944e1082723';
    const sortParam = sortBy ? `&sortBy=${sortBy}` : '';
    const endpoint = `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${apiKey}${sortParam}`;

    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      setArticles(data.articles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  useEffect(() => {
    fetchArticles('general', sortOption);
  }, ['general', sortOption]);

  const handleSearch = (keywords) => {
    fetchArticles(keywords, sortOption);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const handleFilter = (source) => {
    setFilterBySource(source);
  };

  return (
    <div>
      <Navbar />
      <SearchForm onSearch={handleSearch} onSortChange={handleSort} onFilterChange={handleFilter} />
      {/* <SortFilter onSortChange={handleSort} onFilterChange={handleFilter} /> */}
      <ArticleList articles={articles} />
    </div>
  );
};

export default App;
