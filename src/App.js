// import "./App.css";
import TodoCounter from "./TodoCounter";
import TodoSearch from "./TodoSearch";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
import CreateTodoButton from "./CreateTodoButton";

const todos = [
  {
    id: 1,
    text: "First todo",
    completed: true,
  },
  {
    id: 2,
    text: "Second todo",
    completed: false,
  },
  {
    id: 3,
    text: "Third todo",
    completed: false,
  },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed} 
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
