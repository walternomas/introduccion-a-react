import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      type="text"
      className='TodoSearch'
      placeholder="Search..."
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export default TodoSearch;