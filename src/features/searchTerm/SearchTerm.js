import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice.js';
import '../../style.css';
import { FaSearch, FaTimes } from 'react-icons/fa'; 



const SearchTerm = (props) => {
  
  const { searchTerm, dispatch } = props;

  const onSearchTermChangeHandler = (e) => {
    const userInput = e.target.value;
    dispatch(setSearchTerm(userInput));
  };
  
  const onClearSearchTermHandler = () => {
    dispatch(clearSearchTerm());
  };

  return (
    <div id="search-container">
      <div className="search-wrapper">
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={onSearchTermChangeHandler}
          placeholder="Search recipes"
        />
        {searchTerm.length === 0 && <FaSearch className="search-icon" />}
        {searchTerm.length > 0 && (
          <button
            onClick={onClearSearchTermHandler}
            type="button"
            id="search-clear-button"
          >
            <FaTimes className="clear-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchTerm;