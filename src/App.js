import React, { useState } from 'react';
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";

const defaultTodos = [
  {
    id: 1,
    text: "First todo",
    completed: true,
  },
  {
    id: 2,
    text: "Second todo",
    completed: true,
  },
  {
    id: 3,
    text: "Third todo",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);

    // todos[todoIndex].completed = true;

    // todos[todoIndex] = {
    //   text: todos[todoIndex].text,
    //   completed: true,
    // };
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
