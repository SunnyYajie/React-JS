import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const currentInput = (event) => {
    setNewTodo(event.target.value);
  };
  const addTodo = () => {
    if (!newTodo) return;
    const todo = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      todoName: newTodo,
    };
    setList([...todoList, todo]);
    setNewTodo("");
  };
  const deleteTodo = (id) => {
    setList(todoList.filter((todo) => todo.id !== id ));
  };

  return (
    <div className="App">
      <div style={{backgroundColor: "#213C51"}}>
        <h1 style={{ margin: "0rem", padding: ".5rem" , color: "white"}}>To Do List</h1>
      </div>
      <div className="editTodo">
        <input onChange={currentInput} value={newTodo} type="text" /> <br></br>
        <button onClick={addTodo}>Add Task</button>
        <button>Edit Task</button>
        <button>Remove Task</button>
      </div>
      <div className='todo'>
        {todoList.map((todo) => { 
          return <div className="listItem">
            <li>{todo.todoName}</li> 
            <button onClick={() => deleteTodo(todo.id)} style={{alignItems: "right", marginLeft: "1rem", marginBottom: "1rem"}}>Remove</button>
          </div>; })}
      </div>
    </div>
  );
}

export default App;
