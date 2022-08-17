import React, { useState } from 'react';
import './TodoSearch.css';

function TodoSearch() {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        className='TodoSearch'
        placeholder="Search..."
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </>
  );
}

export default TodoSearch;