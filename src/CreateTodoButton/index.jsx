import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };

  return (
    <button 
      className='CreateTodoButton' 
      onClick={()=>onClickButton('el mensaje')}
    >
      +
    </button>
  );
}

export default CreateTodoButton;