import './TodoSearch.css';

function TodoSearch() {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input 
      type="text" 
      className='TodoSearch' 
      placeholder="Search..." 
      onChange={onSearchValueChange}
    />
  );
}

export default TodoSearch;