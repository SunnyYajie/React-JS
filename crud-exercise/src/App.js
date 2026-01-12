import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const currentInput = (event) => {
    setNewTodo(event.target.value);
  };
  const addTodo = () => {
    setList([...todoList, newTodo]);
    setNewTodo("");
  };

  return (
    <div className="App">
      <div style={{backgroundColor: "#213C51"}}>
        <h2 style={{ margin: "0rem", padding: ".5rem" , color: "white"}}>To Do List</h2>
      </div>
      <div className="editTodo">
        <input onChange={currentInput} value={newTodo} /> <br></br>
        <button onClick={addTodo}>Add Task</button>
        <button>Edit Task</button>
        <button>Remove Task</button>
      </div>
      <div className='todo'>
        {todoList.map((task) => { return <li>{task}</li>; })}
      </div>
    </div>
  );
}

export default App;
