import TodoIcon from "./";

function DeleteIcon({ onDelete }) {
  return <TodoIcon type="delete" onClick={onDelete} />;
}

export default DeleteIcon;
