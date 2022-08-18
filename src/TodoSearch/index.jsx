import { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

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